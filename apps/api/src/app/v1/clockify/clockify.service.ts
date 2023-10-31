import { Client, Project, User, Workspace } from '@itsmillertimedev/data';
import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { dataFetcher } from '../../../common/handlers/dataFetcher';
import { PrismaService } from '../../common/prisma/prisma.service';
import { SettingsService } from '../../common/settings/settings.service';

@Injectable()
export class ClockifyService {
  constructor(
    private prisma: PrismaService,
    private http: HttpService,
    private readonly settings: SettingsService,
  ) {
    this.loadSettings().then((data) => {
      this.workspaceId = data.workspaceId;
      this.userId = data.userId;
      this.logger.log('Clockify settings loaded successfully');
    });
  }

  // Variables local to the class
  logger = new Logger(ClockifyService.name);
  workspaceId = null;
  userId = null;

  // Function to load the settings from the settings service
  async loadSettings() {
    try {
      const workspaceId = await this.settings.getFieldValue(
        'clockify',
        'workspace_id',
      );
      const userId = await this.settings.getFieldValue('clockify', 'user_id');

      return { workspaceId, userId };
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  // Adds a running timer to the database, used primarly by webhooks
  async addClockifyTimer(
    projectId: string,
    startTime = Date.now().toLocaleString(),
  ) {
    if (projectId === null) {
      this.logger.error('ProjectID was required, but one was not provided');
      throw new BadRequestException('must provide project ID');
    }

    try {
      const result = await this.prisma.clockifyTimer.upsert({
        where: { projectId },
        create: { projectId, startTime },
        update: { startTime },
      });

      if (result !== null) {
        this.logger.log(
          `Inserted clockify timer successfully for project ${projectId}`,
        );
      }

      return result;
    } catch (error) {
      this.logger.error(error);
      throw error;
    }
  }

  // Stop time for projectID, used by webhooks
  async removeClockifyTimer(projectID: string) {
    try {
      // first try and fetch the project, if its null then it was already removed
      const data = await this.prisma.clockifyTimer.findUnique({
        where: { projectId: projectID },
      });

      if (data !== null) {
        this.logger.log(`Project ${projectID} is being removed`);
        return this.prisma.clockifyTimer.delete({
          where: { projectId: projectID },
        });
      } else {
        this.logger.log(
          `Project ${projectID} has already been deleted, skipping deletion`,
        );
        return null;
      }
    } catch (error) {
      this.logger.log(error);
      return null;
    }
  }

  // Get list of workspaces
  async getWorkspaces(): Promise<Array<Workspace>> {
    return await dataFetcher(this.http.get('workspaces'));
  }

  // Create client
  async createClient({ name }): Promise<Client> {
    const result = await dataFetcher<Client>(
      this.http.post(`/workspaces/${this.workspaceId}/clients`, { name }),
    );

    return result;
  }

  // Get list of clients
  async getClients({
    page = 1,
    pageSize = 50,
    archived = false,
  }): Promise<Array<Client>> {
    return dataFetcher<Array<Client>>(
      this.http.get(`/workspaces/${this.workspaceId}/clients`, {
        params: {
          archived,
          'page-size': pageSize,
          page,
        },
      }),
    );
  }

  // Fetch specific client by ID
  async getClient(id: string): Promise<Client> {
    return dataFetcher<Client>(
      this.http.get(`/workspaces/${this.workspaceId}/clients/${id}`),
    );
  }

  // Update client information
  async updateClient(id: string, data: Client): Promise<Client> {
    return dataFetcher<Client>(
      this.http.put(`/workspaces/${this.workspaceId}/clients/${id}`, data),
    );
  }

  // Delete client
  async deleteClient(id: string): Promise<Client> {
    return dataFetcher<Client>(
      this.http.delete(`/workspaces/${this.workspaceId}/clients/${id}`),
    );
  }

  // Get list of projects
  async getProjects({
    name,
    clients,
    archived = false,
    pageSize = 25,
    page = 1,
  }): Promise<Array<Project>> {
    return dataFetcher(
      this.http.get(`/workspaces/${this.workspaceId}/projects`, {
        params: {
          archived,
          'page-size': pageSize,
          page,
          name,
          clients,
        },
      }),
    );
  }

  async getProject(id): Promise<Project> {
    return dataFetcher(
      this.http.get(`/workspaces/${this.workspaceId}/projects/${id}`),
    );
  }

  async createProject(body: Project): Promise<Project> {
    return dataFetcher(
      this.http.post(`/workspaces/${this.workspaceId}/projects`, body),
    );
  }

  async updateProject(id: string, body: Project): Promise<Project> {
    return dataFetcher(
      this.http.put(`/workspaces/${this.workspaceId}/projects/${id}`, body),
    );
  }

  async deleteProject(id: string): Promise<Project> {
    // To delete a project we must first archive the project if its not already, so lets do that first
    const currentProjectState = await this.getProject(id);

    if (currentProjectState.archived !== true) {
      this.logger.log(
        `Projet ${currentProjectState.name} is not archived, doing so now`,
      );
      const updatedProject = await this.updateProject(id, {
        ...currentProjectState,
        archived: true,
      });

      if (updatedProject.archived) {
        this.logger.log(
          `${updatedProject.name} is now archived, ready for deletion`,
        );
      }
    }

    return dataFetcher(
      this.http.delete(`/workspaces/${this.workspaceId}/projects/${id}`),
    );
  }

  // Function to get all users on workspace
  async getUsers(): Promise<Array<User>> {
    const data = await dataFetcher<Array<User>>(
      this.http.get(`/workspaces/${this.workspaceId}/users`),
    );
    return data;
  }

  // Function to run when timers are started
  async startTimer(projectId: string): Promise<any> {
    if (!projectId) {
      throw new BadRequestException('Must provide projectId');
    }

    const data = await dataFetcher(
      this.http.post(`/workspaces/${this.workspaceId}/time-entries`, {
        projectId,
      }),
    );
    return data;
  }

  // Function to run when timers are stopped
  async stopTimer(): Promise<any> {
    const data = await dataFetcher(
      this.http.patch(
        `/workspaces/${this.workspaceId}
      )}/user/${this.userId}/time-entries`,
        {
          end: new Date().toISOString(),
        },
      ),
    );
    return data;
  }
}
