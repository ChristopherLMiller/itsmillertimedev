import { HttpService } from '@nestjs/axios';
import { BadRequestException, Injectable } from '@nestjs/common';
import { catchError, firstValueFrom, Observable } from 'rxjs';
import { handleAxiosError } from '../../handleAxiosError';
import { DiscordService } from '../discord/discord.service';
import { DiscordChannels } from '../discord/discord.types';
import { PrismaService } from './../../../prisma/prisma.service';
import { ClockifyWorkspaceDto, StartTimerDto } from './dto';

@Injectable()
export class ClockifyService {
  constructor(
    private prisma: PrismaService,
    private http: HttpService,
    private discord: DiscordService
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
  }): Observable<any> {
    console.log(archived, pageSize, page, name);
    return this.http.get(
      `/workspaces/${process.env.CLOCKIFY_WORKSPACE_ID}/projects`,
      {
        params: {
          archived,
          'page-size': pageSize,
          page,
          name,
        },
      }
    );
  }

  // Function to run when timers are started
  async startTimer(projectId: StartTimerDto): Promise<any> {
    if (!projectId) {
      throw new BadRequestException('Must provide projectId');
    }

    // kick off the webhook for the timer start
    //this.webhooks.sendDiscordMessage(`Clockify Project Started - ${projectId}`);

    const response = this.http
      .post(`/workspaces/${process.env.CLOCKIFY_WORKSPACE_ID}/time-entries`, {
        projectId,
      })
      .pipe(catchError(handleAxiosError));
    return firstValueFrom(response);
  }

  // Function to run when timers are stopped
  stopTimer(projectId: string): Observable<any> {
    this.discord.sendMessage(
      `Clockify Project Stopped - ${projectId}`,
      DiscordChannels.DISCORD_BOT_SPAM_CHANNEL
    );
    return this.http.patch(
      `/workspaces/${process.env.CLOCKIFY_WORKSPACE_ID}/user/${process.env.CLOCKIFY_USER_ID}/time-entries`,
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
      `workspaces/${process.env.CLOCKIFY_WORKSPACE_ID}/projects/${projectId}`
    );
  }
}
