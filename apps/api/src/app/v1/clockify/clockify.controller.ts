import {
  Client,
  Project,
  TimeInterval,
  User,
  Workspace,
} from '@itsmillertimedev/data';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Logger,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClockifyTimer } from '@prisma/client';
import { HttpStatusCode } from 'axios';
import { formatDistanceStrict, parseISO } from 'date-fns';
import {
  PermissionsNodes,
  PermissionsPublic,
} from '../../../common/decorators/auth.decorator';
import { ResponseTimeLimit } from '../../../common/decorators/responseTime.decorator';
import { HookdeckGuard } from '../../../common/guards/hookdeck.guard';
import { supabaseAuthGuard } from '../../../common/guards/supabaseAuth.guard';
import { DataResponse } from '../../../lib/response';
import { SettingsService } from '../../common/settings/settings.service';
import { DiscordService } from '../discord/discord.service';
import { ClockifyService } from './clockify.service';
import { ClockifyPermissionNodes } from './permissions.nodes';

@Controller({ version: '1', path: 'clockify' })
@ApiTags('Clockify')
@UseGuards(supabaseAuthGuard)
@ResponseTimeLimit(100)
export class ClockifyController {
  constructor(
    private clockify: ClockifyService,
    private discord: DiscordService,
    private settings: SettingsService,
  ) {
    this.loadSettings().then((data) => {
      this.discordNotificationSettings = data.discordNotificationSettings;
      this._logger.log('Clockify settings loaded successfully');
    });
  }

  // Variable local to the class
  private discordNotificationSettings = null;
  private _logger = new Logger(ClockifyController.name);

  async loadSettings() {
    try {
      const discordNotificationSettings = await this.settings.getField(
        'clockify',
        'discord_notifications',
      );
      return { discordNotificationSettings };
    } catch (error) {
      this._logger.error(error);
      throw error;
    }
  }

  //#region workspaces
  @Get('workspaces')
  @ApiOperation({ summary: 'Get list of workspaces' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadGateway,
    description: 'Bad Request',
  })
  @PermissionsPublic()
  async getWorkspaces(): DataResponse<Array<Workspace>> {
    return { data: await this.clockify.getWorkspaces() };
  }
  //#endregion

  //#region Clients
  @Get('clients')
  @ApiOperation({ summary: 'Get list of clients in workspace' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadGateway,
    description: "Bad Request'",
  })
  @PermissionsPublic()
  async getClients(
    @Query('page') page?: number,
    @Query('page-size') pageSize?: number,
    @Query('archived') archived?: boolean,
  ): DataResponse<Array<Client>> {
    return {
      data: await this.clockify.getClients({ page, pageSize, archived }),
    };
  }

  @Get('clients/:id')
  @ApiOperation({ summary: 'Get client in workspace' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadGateway,
    description: "Bad Request'",
  })
  @PermissionsPublic()
  async getClient(@Param('id') id: string): DataResponse<Client> {
    return {
      data: await this.clockify.getClient(id),
    };
  }

  @Put('clients/:id')
  @ApiOperation({ summary: 'Get client in workspace' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadGateway,
    description: "Bad Request'",
  })
  @PermissionsNodes(ClockifyPermissionNodes.UPDATE_CLIENT)
  async updateClient(
    @Param('id') id: string,
    @Body() body: Client,
  ): DataResponse<Client> {
    return {
      data: await this.clockify.updateClient(id, body),
    };
  }

  @Delete('clients/:id')
  @ApiOperation({ summary: 'Delete client' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadGateway,
    description: "Bad Request'",
  })
  @PermissionsNodes(ClockifyPermissionNodes.DELETE_CLIENT)
  async deleteClient(@Param('id') id: string): DataResponse<Client> {
    return {
      data: await this.clockify.deleteClient(id),
    };
  }

  @Post('clients')
  @ApiOperation({
    summary: 'Create a new clockify client on the specified workspace',
  })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Successfully created new client',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden.  Must have permission to add new client',
  })
  @PermissionsNodes(ClockifyPermissionNodes.CREATE_CLIENT)
  async createClient(@Body('name') name: string): DataResponse<Client> {
    return { data: await this.clockify.createClient({ name }) };
  }
  //#endregion

  //#region Projects
  @Get('projects')
  @ApiOperation({ summary: 'Get list of projects' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: 'Bad Request',
  })
  @PermissionsPublic()
  async getProjects(
    @Query('archived') archived?: boolean,
    @Query('clients') clients?: string,
    @Query('page-size') pageSize?: number,
    @Query('name') name?: string,
    @Query('page') page?: number,
  ): DataResponse<Array<Project>> {
    const projects = await this.clockify.getProjects({
      archived,
      pageSize,
      page,
      name,
      clients,
    });

    return {
      data: projects,
      meta: { archived, pageSize, name, page },
    };
  }

  @Get('projects/:id')
  @HttpCode(HttpStatusCode.Ok)
  @ApiOperation({ summary: 'Get a specific clockify project' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: 'Bad Request',
  })
  @PermissionsPublic()
  async getProject(@Param('id') id: string): DataResponse<Project> {
    const project = await this.clockify.getProject(id);

    return {
      data: project,
      meta: { id },
    };
  }

  @Post('projects')
  @ApiOperation({
    summary: 'Create a new clockify project on the workspace',
  })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Successfully created new project',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden.  Must have permission to add new project',
  })
  @PermissionsNodes(ClockifyPermissionNodes.CREATE_PROJECT)
  async createProject(@Body() body: Project): DataResponse<Project> {
    return { data: await this.clockify.createProject(body) };
  }

  @Put('projects/:id')
  @ApiOperation({
    summary: 'Update a clockify project on the workspace',
  })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Successfully updated project',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden.  Must have permission to update project',
  })
  @PermissionsNodes(ClockifyPermissionNodes.UPDATE_PROJECT)
  async updateProject(
    @Param('id') id: string,
    @Body() body: Project,
  ): DataResponse<Project> {
    return { data: await this.clockify.updateProject(id, body) };
  }

  @Delete('projects/:id')
  @ApiOperation({
    summary: 'Create a new clockify project on the workspace',
  })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Successfully created new project',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden.  Must have permission to add new project',
  })
  @PermissionsNodes(ClockifyPermissionNodes.DELETE_PROJECT)
  async deleteProject(@Param('id') id: string): DataResponse<Project> {
    return { data: await this.clockify.deleteProject(id) };
  }
  //#endregion

  //#region Users
  @ApiOperation({ summary: 'Get all the users on the workspace' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Invalid API Key',
  })
  @Get('users')
  @PermissionsPublic()
  async getUsers(): DataResponse<Array<User>> {
    return {
      data: await this.clockify.getUsers(),
    };
  }
  //#endregion

  //#region Build Time
  @ApiOperation({ summary: 'Get build time of provided project' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: 'Bad Request - Must provide ProjectID',
  })
  @Get('buildtime/:id')
  @PermissionsPublic()
  async getBuildTime(@Param('id') id: string): DataResponse<Partial<Project>> {
    const response = await this.clockify.getProject(id);
    return {
      data: { duration: response.duration },
      meta: {
        projectID: id,
      },
    };
  }
  //#endregion

  //#region Timers
  @ApiOperation({ summary: 'Start timer of provided project' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: 'Bad Request - Must provide ProjectID',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Unauthorized',
  })
  @Post('start-timer/:id')
  @PermissionsNodes(ClockifyPermissionNodes.START_TIMER)
  async startTimer(@Param('id') id: string): DataResponse<unknown> {
    const data = this.clockify.startTimer(id);
    return { data, meta: { id } };
  }

  @HttpCode(HttpStatusCode.Ok)
  @ApiOperation({ summary: 'Stop timer of provided project' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: 'Bad Request - Must provide ProjectID',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  @Post('stop-timer/:id')
  @PermissionsNodes(ClockifyPermissionNodes.STOP_TIMER)
  async stopTimer(): DataResponse<unknown> {
    return {
      data: await this.clockify.stopTimer(),
    };
  }
  //#endregion

  //#region Webhooks
  @Post('webhook/start')
  @ApiOperation({
    summary:
      'Webhook endpoint for clockify to call to when starting a new timer',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Invalid clockify signature provided',
  })
  @PermissionsPublic()
  @UseGuards(HookdeckGuard)
  async clockifyTimeStart(
    @Body('timeInterval') timeInterval: TimeInterval,
    @Body('project') project: Project,
  ): DataResponse<ClockifyTimer> {
    // short circuit execution if project wasn't provided, it can happen
    if (project === null) {
      return null;
    }

    // send a discord notification if its enabled in the settings
    if (this.discordNotificationSettings['webhook_start']['value']) {
      // send a message to discord
      this.discord.sendMessage(
        `Clockify timer started for '${project.name}'`,
        'spam_channel',
      );
    }

    return {
      data: await this.clockify.addClockifyTimer(
        project.id,
        timeInterval.start,
      ),
    };
  }

  @Post('webhook/stop')
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Invalid clockify signature provided',
  })
  @PermissionsPublic()
  @UseGuards(HookdeckGuard)
  async webhookClockifyStop(
    @Body('project') project: Project,
    @Body('timeInterval') timeInterval: TimeInterval,
  ): DataResponse<ClockifyTimer> {
    // convert the timeInterval to a number
    const timeElapsed = formatDistanceStrict(
      parseISO(timeInterval.end),
      parseISO(timeInterval.start),
    );

    // send a discord notification if its enabled in the settings
    if (this.discordNotificationSettings['webhook_stop']['value']) {
      // send a message to discord
      this.discord.sendMessage(
        `Clockify timer stopped for '${project.name}'; Elapsed time ${timeElapsed}`,
        'spam_channel',
      );
    }

    return { data: await this.clockify.removeClockifyTimer(project.id) };
  }

  @Post('webhook/delete')
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Invalid clockify signature provided',
  })
  @PermissionsPublic()
  @UseGuards(HookdeckGuard)
  async webhookClockifyDelete(
    @Body('project') project: Project,
  ): DataResponse<ClockifyTimer> {
    // if the projectId is null we just will ignore this
    if (project.id == null) {
      this._logger.error('Must provide projectID');
      throw new BadRequestException('Must provide projectId');
    }

    // send a discord notification if its enabled in the settings
    if (this.discordNotificationSettings['webhook_delete']['value']) {
      this.discord.sendMessage(
        `Clockify timer deleted for '${project.name}'`,
        'spam_channel',
      );
    }
    return { data: await this.clockify.removeClockifyTimer(project.id) };
  }
  //#endregion
}
