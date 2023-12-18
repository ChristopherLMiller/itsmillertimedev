import { DataResponse } from "@itsmillertimedev/data";
import { CacheInterceptor } from "@nestjs/cache-manager";
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseInterceptors,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { DiscordUserSetting } from "@prisma/client";
import { HttpStatusCode } from "axios";
import { Collection, User } from "discord.js";
import { PermissionsNodes } from "../../../common/decorators/auth.decorator";
import { DiscordPermissionNodes } from "./discord.permissions";
import { DiscordService } from "./discord.service";

@Controller({ version: "1", path: "discord" })
@ApiTags("Discord")
@UseInterceptors(CacheInterceptor)
export class DiscordController {
  constructor(private discord: DiscordService) {}

  @Post("message")
  @PermissionsNodes(DiscordPermissionNodes.SEND_MESSAGE)
  @ApiResponse({ status: HttpStatusCode.Created, description: "Sent message" })
  @ApiOperation({ description: "Send a discord message to specified channel" })
  sendDiscordMessage(
    @Body("channel") channel: string,
    @Body("message") message: string,
  ): void {
    this.discord.sendDiscordMessage(message, channel);
  }

  //#region User Meta (Prisma)
  @Get("meta/users")
  @ApiOperation({
    description: "Get the Discord users with associated accounts",
  })
  @ApiResponse({ status: HttpStatusCode.Ok, description: "Success" })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  @PermissionsNodes(DiscordPermissionNodes.GET_USER_META)
  async getUsersMeta(): DataResponse<Array<DiscordUserSetting>> {
    return { data: await this.discord.getUsersMeta() };
  }

  @Get("meta/users/:id")
  @ApiOperation({
    description: "Get the Discord users with associated accounts",
  })
  @ApiResponse({ status: HttpStatusCode.Ok, description: "Success" })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  @PermissionsNodes(DiscordPermissionNodes.GET_USER_META)
  async getUserMeta(
    @Param("id") userId: DiscordUserSetting["userId"],
  ): DataResponse<Array<DiscordUserSetting>> {
    return { data: await this.discord.getUsersMeta(userId) };
  }

  @Post("meta/users")
  @ApiOperation({ description: "Create a new Discord user meta entry" })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: "Successfully created",
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Unauthorized",
  })
  @PermissionsNodes(DiscordPermissionNodes.CREATE_USER_META)
  async createUser(
    @Body("userId") userId: string,
    @Body("meta") meta?: DiscordUserSetting["meta"],
  ): DataResponse<DiscordUserSetting> {
    return { data: await this.discord.createUserMeta(userId, meta) };
  }
  //#endregion

  // #region Discord Users
  @Get("client/users")
  @ApiOperation({
    description: "Get the Discord users with associated accounts",
  })
  @ApiResponse({ status: HttpStatusCode.Ok, description: "Success" })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  async getClientUsers(): DataResponse<Collection<string, User>> {
    return { data: await this.discord.getDiscordClientUsers() };
  }

  @Get("client/users/:id")
  @ApiOperation({ description: "Get the Discord user specified" })
  @ApiResponse({ status: HttpStatusCode.Ok, description: "Success" })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  @ApiResponse({
    status: HttpStatusCode.BadRequest,
    description: "Unable to find the specified user in the cache",
  })
  async getClientUser(@Param("id") id: string): DataResponse<User> {
    return { data: await this.discord.getDiscordClientUser(id) };
  }
}
