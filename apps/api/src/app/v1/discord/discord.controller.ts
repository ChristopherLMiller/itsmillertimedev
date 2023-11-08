import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DiscordUserSetting } from '@prisma/client';
import { HttpStatusCode } from 'axios';
import { Collection, User } from 'discord.js';
import { PermissionsNodes } from '../../../common/decorators/auth.decorator';
import { supabaseAuthGuard } from '../../../common/guards/supabaseAuth.guard';
import { DataResponse } from '../../../lib/response';
import { DiscordService } from './discord.service';
import { DiscordPermissionNodes } from './permissions.nodes';

@Controller({ version: '1', path: 'discord' })
@ApiTags('Discord', 'Bot')
@UseGuards(supabaseAuthGuard)
export class DiscordController {
  constructor(private discord: DiscordService) {}

  @Post('message')
  @PermissionsNodes(DiscordPermissionNodes.SEND_MESSAGE)
  @ApiResponse({ status: HttpStatusCode.Created, description: 'Sent message' })
  @ApiOperation({ description: 'Send a discord message to specified channel' })
  sendDiscordMessage(
    @Body('channel') channel: string,
    @Body('message') message: string,
  ): void {
    this.discord.sendDiscordMessage(message, channel);
  }

  //#region User Meta (Prisma)
  @Get('meta/users')
  @ApiOperation({
    description: 'Get the Discord users with associated accounts',
  })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  async getUsers(): DataResponse<Array<DiscordUserSetting>> {
    return { data: await this.discord.getUsers() };
  }
  //#endregion

  // #region Discord Users
  @Get('client/users')
  @ApiOperation({
    description: 'Get the Discord users with associated accounts',
  })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  async getClientUsers(): DataResponse<Collection<string, User>> {
    return { data: await this.discord.getDiscordClientUsers() };
  }

  @Get('client/users/:id')
  @ApiOperation({ description: 'Get the Discord user specified' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: 'Unable to find the specified user in the cache',
  })
  async getClientUser(@Param('id') id: string): DataResponse<User> {
    return { data: await this.discord.getDiscordClientUser(id) };
  }
}
