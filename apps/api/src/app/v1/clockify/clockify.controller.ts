import {
  ClockifyBuildTime,
  ClockifyProject,
  ClockifyWorkspace,
  Response,
} from '@itsmillertimedev/data';

import {
  Controller,
  Get,
  HttpCode,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpStatusCode } from 'axios';
import {
  PermissionsPublic,
  PermissionsRequired,
} from '../../../common/decorators/auth.decorator';
import { supabaseAuthGuard } from '../../../common/guards/supabaseAuth.guard';
import { ClockifyService } from './clockify.service';

@Controller({ version: '1', path: 'clockify' })
@ApiTags('Clockify')
@UseGuards(supabaseAuthGuard)
export class ClockifyController {
  constructor(private clockify: ClockifyService) {}

  @Get('workspaces')
  @HttpCode(HttpStatusCode.Ok)
  @ApiOperation({ summary: 'Get list of workspaces' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadGateway,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Unauthorized',
  })
  @PermissionsPublic()
  async getWorkspaces(): Response<ClockifyWorkspace> {
    return { data: await this.clockify.getWorkspaces() };
  }

  @Get('projects')
  @HttpCode(HttpStatusCode.Ok)
  @ApiOperation({ summary: 'Get list of projects' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Unauthorized',
  })
  @PermissionsPublic()
  async getProjects(
    @Query('archived') archived?: boolean,
    @Query('page-size') pageSize?: number,
    @Query('name') name?: string,
    @Query('page') page?: number
  ): Response<ClockifyProject> {
    const projects = await this.clockify.getProjects({
      archived,
      pageSize,
      page,
      name,
    });

    return {
      data: projects,
      meta: { archived, pageSize, name, page },
    };
  }

  @Get('project/:id')
  @HttpCode(HttpStatusCode.Ok)
  @ApiOperation({ summary: 'Get a specific clockify project' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: 'Bad Request',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Unauthorized',
  })
  @PermissionsPublic()
  async getProject(@Param('id') id: string): Response<ClockifyProject> {
    const project = await this.clockify.getProject({
      id,
    });

    return {
      data: project,
      meta: { id },
    };
  }

  @HttpCode(HttpStatusCode.Ok)
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
  @PermissionsRequired('CLOCKIFY.START_TIMER')
  async startTimer(@Param('id') id: string): Response<unknown> {
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
  @PermissionsRequired('CLOCKIFY.STOP_TIMER')
  async stopTimer(): Response<unknown> {
    return {
      data: await this.clockify.stopTimer(),
    };
  }

  @HttpCode(HttpStatusCode.Ok)
  @ApiOperation({ summary: 'Get build time of provided project' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: 'Bad Request - Must provide ProjectID',
  })
  @Get('buildtime/:id')
  @PermissionsPublic()
  async getBuildTime(@Param('id') id: string): Response<ClockifyBuildTime> {
    return {
      data: await this.clockify.getBuildTime(id),
      meta: {
        projectID: id,
      },
    };
  }
}
