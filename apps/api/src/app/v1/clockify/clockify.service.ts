import {
  Client,
  ClockifyTimer,
  DB,
  Project,
  User,
  Workspace,
} from "@itsmillertimedev/data";
import { HttpService } from "@nestjs/axios";
import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { DeleteResult, Kysely, Selectable } from "kysely";
import { InjectKysely } from "nestjs-kysely";
import { dataFetcher } from "../../../common/handlers/dataFetcher";
import { SettingsService } from "../../common/settings/settings.service";

@Injectable()
export class ClockifyService {
  constructor(
    @InjectKysely() private readonly db: Kysely<DB>,
    private http: HttpService,
    private settings: SettingsService,
  ) {}

  // Variables local to the class
  private readonly _logger = new Logger(ClockifyService.name);

  // Adds a running timer to the database, used primarly by webhooks
  async addClockifyTimer(
    projectId: string,
    startTime = Date.now().toLocaleString(),
  ): Promise<Selectable<ClockifyTimer>> {
    if (projectId === null) {
      this._logger.error("ProjectID was required, but one was not provided");
      throw new BadRequestException("must provide project ID");
    }

    try {
      const result = await this.db
        .insertInto("ClockifyTimer")
        .values([{ projectId, startTime }])
        .returningAll()
        .executeTakeFirst();

      if (result !== null) {
        this._logger.log(
          `Inserted clockify timer successfully for project ${projectId}`,
        );
      }

      return result;
    } catch (error) {
      this._logger.error(error);
      throw error;
    }
  }

  // Stop time for projectID, used by webhooks
  async removeClockifyTimer(projectID: string): Promise<DeleteResult[]> {
    try {
      // first try and fetch the project, if its null then it was already removed
      return await this.db
        .deleteFrom("ClockifyTimer")
        .where("ClockifyTimer.projectId", "=", projectID)
        .execute();
    } catch (error) {
      this._logger.log(error);
      return null;
    }
  }

  // Get list of workspaces
  async getWorkspaces(): Promise<Array<Workspace>> {
    return await dataFetcher(this.http.get("workspaces"));
  }

  // Create client
  async createClient({ name }): Promise<Client> {
    const result = await dataFetcher<Client>(
      this.http.post(
        `/workspaces/${await this.settings.getFieldValue(
          "clockify",
          "workspace-id",
        )}/clients`,
        { name },
      ),
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
      this.http.get(
        `/workspaces/${await this.settings.getFieldValue(
          "clockify",
          "workspace-id",
        )}/clients`,
        {
          params: {
            archived,
            "page-size": pageSize,
            page,
          },
        },
      ),
    );
  }

  // Fetch specific client by ID
  async getClient(id: string): Promise<Client> {
    return dataFetcher<Client>(
      this.http.get(
        `/workspaces/${await this.settings.getFieldValue(
          "clockify",
          "workspace-id",
        )}/clients/${id}`,
      ),
    );
  }

  // Update client information
  async updateClient(id: string, data: Client): Promise<Client> {
    return dataFetcher<Client>(
      this.http.put(
        `/workspaces/${await this.settings.getFieldValue(
          "clockify",
          "workspace-id",
        )}/clients/${id}`,
        data,
      ),
    );
  }

  // Delete client
  async deleteClient(id: string): Promise<Client> {
    return dataFetcher<Client>(
      this.http.delete(
        `/workspaces/${await this.settings.getFieldValue(
          "clockify",
          "workspace-id",
        )}/clients/${id}`,
      ),
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
      this.http.get(
        `/workspaces/${await this.settings.getFieldValue(
          "clockify",
          "workspace-id",
        )}/projects`,
        {
          params: {
            archived,
            "page-size": pageSize,
            page,
            name,
            clients,
          },
        },
      ),
    );
  }

  async getProject(id): Promise<Project> {
    return dataFetcher(
      this.http.get(
        `/workspaces/${await this.settings.getFieldValue(
          "clockify",
          "workspace-id",
        )}/projects/${id}`,
      ),
    );
  }

  async createProject(body: Project): Promise<Project> {
    return dataFetcher(
      this.http.post(
        `/workspaces/${await this.settings.getFieldValue(
          "clockify",
          "workspace-id",
        )}/projects`,
        body,
      ),
    );
  }

  async updateProject(id: string, body: Project): Promise<Project> {
    return dataFetcher(
      this.http.put(
        `/workspaces/${await this.settings.getFieldValue(
          "clockify",
          "workspace-id",
        )}/projects/${id}`,
        body,
      ),
    );
  }

  async deleteProject(id: string): Promise<Project> {
    // To delete a project we must first archive the project if its not already, so lets do that first
    const currentProjectState = await this.getProject(id);

    if (currentProjectState.archived !== true) {
      this._logger.log(
        `Projet ${currentProjectState.name} is not archived, doing so now`,
      );
      const updatedProject = await this.updateProject(id, {
        ...currentProjectState,
        archived: true,
      });

      if (updatedProject.archived) {
        this._logger.log(
          `${updatedProject.name} is now archived, ready for deletion`,
        );
      }
    }

    return dataFetcher(
      this.http.delete(
        `/workspaces/${await this.settings.getFieldValue(
          "clockify",
          "workspace-id",
        )}/projects/${id}`,
      ),
    );
  }

  // Function to get all users on workspace
  async getUsers(): Promise<Array<User>> {
    const data = await dataFetcher<Array<User>>(
      this.http.get(
        `/workspaces/${await this.settings.getFieldValue(
          "clockify",
          "workspace-id",
        )}/users`,
      ),
    );
    return data;
  }

  // Function to run when timers are started
  async startTimer(projectId: string): Promise<unknown> {
    if (!projectId) {
      throw new BadRequestException("Must provide projectId");
    }

    const data = await dataFetcher(
      this.http.post(
        `/workspaces/${await this.settings.getFieldValue(
          "clockify",
          "workspace-id",
        )}/time-entries`,
        {
          projectId,
        },
      ),
    );
    return data;
  }

  // Function to run when timers are stopped
  async stopTimer(): Promise<unknown> {
    const data = await dataFetcher(
      this.http.patch(
        `/workspaces/${await this.settings.getFieldValue(
          "clockify",
          "workspace-id",
        )}
      )}/user/${await this.settings.getFieldValue(
        "clockify",
        "user-id",
      )}/time-entries`,
        {
          end: new Date().toISOString(),
        },
      ),
    );
    return data;
  }
}
