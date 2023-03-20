import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { catchError, firstValueFrom, Observable } from 'rxjs';
import { axiosErrorHandler } from '../../../common/handlers/axiosErrorHandler';
import { PrismaService } from '../../../common/prisma/prisma.service';
import { DiscordService } from '../discord/discord.service';
import { DiscordChannels } from '../discord/discord.types';
import { ClockifyWorkspaceDto, StartTimerDto } from './dto';

@Injectable()
export class ClockifyService {
  logger = new Logger(ClockifyService.name);

  constructor(
    private prisma: PrismaService,
    private http: HttpService,
    private discord: DiscordService,
    private readonly config: ConfigService
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
  getWorkspaces(): Observable<ClockifyWorkspaceDto> {
    return this.http.get('workspaces');
  }

  // Get list of projects
  getProjects({
    name,
    archived = false,
    pageSize = 25,
    page = 1,
  }): Promise<any> {
    this.logger.log(archived, pageSize, page, name);
    const response = this.http
      .get(`/workspaces/${this.config.get('CLOCKIFY_WORKSPACE_ID')}/projects`, {
        params: {
          archived,
          'page-size': pageSize,
          page,
          name,
        },
      })
      .pipe(catchError(axiosErrorHandler));

    const data = firstValueFrom(response);
    return data;
  }

  // Function to run when timers are started
  async startTimer(projectId: StartTimerDto): Promise<any> {
    if (!projectId) {
      throw new BadRequestException('Must provide projectId');
    }

    // kick off the webhook for the timer start
    this.discord.sendMessage(
      `Clockify Project Started - ${projectId}`,
      DiscordChannels.DISCORD_BOT_SPAM_CHANNEL
    );

    const response = this.http
      .post(
        `/workspaces/${this.config.get('CLOCKIFY_WORKSPACE_ID')}/time-entries`,
        {
          projectId,
        }
      )
      .pipe(catchError(axiosErrorHandler));
    return firstValueFrom(response);
  }

  // Function to run when timers are stopped
  stopTimer(projectId: string): Observable<any> {
    this.discord.sendMessage(
      `Clockify Project Stopped - ${projectId}`,
      DiscordChannels.DISCORD_BOT_SPAM_CHANNEL
    );
    return this.http.patch(
      `/workspaces/${this.config.get(
        'CLOCKIFY_WORKSPACE_ID'
      )}/user/${this.config.get('CLOCKIFY_USER_ID')}/time-entries`,
      {
        end: new Date().toISOString(),
      }
    );
  }

  // Get the build time of the projectID specified
  getBuildTime(projectId: string): Observable<any> {
    if (projectId === null) {
      throw new BadRequestException('Must provide clockify project_id');
    }

    return this.http.get(
      `workspaces/${this.config.get(
        'CLOCKIFY_WORKSPACE_ID'
      )}/projects/${projectId}`
    );
  }
}
