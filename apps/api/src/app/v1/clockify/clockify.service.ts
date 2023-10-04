import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { dataFetcher } from '../../../common/handlers/dataFetcher';
import { PrismaService } from '../../common/prisma/prisma.service';
import { SettingsService } from '../../common/settings/settings.service';

@Injectable()
export class ClockifyService {
  logger = new Logger(ClockifyService.name);

  constructor(
    private prisma: PrismaService,
    private http: HttpService,
    private readonly settings: SettingsService,
  ) {}

  // Start new timer for projectID
  addClockifyTimer(projectId: string, startTime: string) {
    return this.prisma.clockifyTimer.create({ data: { projectId, startTime } });
  }

  // Stop time for projectID
  removeClockifyTimer(projectID: string) {
    return this.prisma.clockifyTimer.delete({
      where: { projectId: projectID },
    });
  }

  // Get list of workspaces
  async getWorkspaces(): Promise<any> {
    return dataFetcher(this.http.get('workspaces'));
  }

  // Get list of projects
  async getProjects({
    name,
    archived = false,
    pageSize = 25,
    page = 1,
  }): Promise<any> {
    const workspaceId = await this.settings.getField(
      'clockify',
      'workspace_id',
    );

    const data = await dataFetcher(
      this.http.get(`/workspaces/${workspaceId}/projects`, {
        params: {
          archived,
          'page-size': pageSize,
          page,
          name,
        },
      }),
    );
    return data;
  }

  async getProject({ id }): Promise<any> {
    const workspaceId = await this.settings.getField(
      'clockify',
      'workspace_id',
    );

    const data = await dataFetcher(
      this.http.get(`/workspaces/${workspaceId}/projects/${id}`),
    );

    return data;
  }

  // Function to run when timers are started
  async startTimer(projectId: string): Promise<any> {
    if (!projectId) {
      throw new BadRequestException('Must provide projectId');
    }

    const workspaceId = await this.settings.getField(
      'clockify',
      'workspace_id',
    );

    const data = await dataFetcher(
      this.http.post(`/workspaces/${workspaceId}/time-entries`, {
        projectId,
      }),
    );
    return data;
  }

  // Function to run when timers are stopped
  async stopTimer(): Promise<any> {
    const clockifySettings = await this.settings.getSetting('clockify');

    const data = await dataFetcher(
      this.http.patch(
        `/workspaces/${clockifySettings['workspace_id']}
      )}/user/${clockifySettings['user_id']}/time-entries`,
        {
          end: new Date().toISOString(),
        },
      ),
    );
    return data;
  }

  // Get the build time of the projectID specified
  async getBuildTime(projectId: string): Promise<any> {
    if (projectId === null) {
      throw new BadRequestException('Must provide clockify project_id');
    }

    const workspaceId = await this.settings.getField(
      'clockify',
      'workspace_id',
    );

    const data = await dataFetcher(
      this.http.get(`workspaces/${workspaceId}/projects/${projectId}`),
    );

    return data;
  }
}
