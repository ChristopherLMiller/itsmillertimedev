import { DataResponse } from "@itsmillertimedev/data";
import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Query,
} from "@nestjs/common";
import {
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger";
import { UserProfile } from "@prisma/client";
import { PermissionsNodes } from "../../../../common/decorators/auth.decorator";
import { SupabaseService } from "../supabase/supabase.service";
import UsersPermissionsNodes from "./userProfiles.permissions";
import { UserProfilesService } from "./userProfiles.service";

@Controller({ path: "auth/users" })
@ApiTags("Authentication", "Users")
export class UserProfilesController {
  constructor(
    private userProfiles: UserProfilesService,
    private supabase: SupabaseService,
  ) {}

  private readonly _logger = new Logger(UserProfilesController.name);

  @Get("/me")
  @ApiOperation({ description: "Gets the current users profile" })
  @ApiOkResponse({
    description: "The user profile of the currently authenticated user via JWT",
  })
  @ApiUnauthorizedResponse({ description: "The user is not authenticated" })
  async getSelf(
    @Query("perms") includePermissions?: boolean,
    @Query("discord") includeDiscord?: boolean,
  ): DataResponse<UserProfile> {
    const user = await this.supabase.getUserFromRequest();
    return {
      data: await this.userProfiles.getUser(
        user.id,
        includePermissions,
        includeDiscord,
      ),
    };
  }

  @Post("/me")
  @ApiOperation({ description: "Update your user profile" })
  @ApiOkResponse({ description: "User profile updated successfully" })
  @ApiUnauthorizedResponse({
    description: "Not authenticated, unable to update user profile",
  })
  async updateSelf(@Body() data: UserProfile): DataResponse<UserProfile> {
    const user = await this.supabase.getUserFromRequest();

    return {
      data: await this.userProfiles.updateUser(user.id, data),
    };
  }

  @Get(":supabaseId")
  @ApiOperation({
    description: "Get the specified users profile for the supabaseID supplied",
  })
  @ApiOkResponse({ description: "The specified users profile" })
  @ApiUnauthorizedResponse({
    description: "The user is not authorized to access this resource",
  })
  @PermissionsNodes(UsersPermissionsNodes.GET_USER)
  async getUser(
    @Param("supabaseId") supabaseId: string,
    @Query("perms") includePermissions?: boolean,
    @Query("discord") includeDiscord?: boolean,
  ): DataResponse<UserProfile> {
    return {
      data: await this.userProfiles.getUser(
        supabaseId,
        includePermissions,
        includeDiscord,
      ),
    };
  }

  @Get("/")
  @ApiOperation({ description: "Get list of all user profiles" })
  @ApiOkResponse({ description: "List all user profiles" })
  @ApiUnauthorizedResponse({ description: "Forbidden Request" })
  @PermissionsNodes(UsersPermissionsNodes.GET_USER)
  async getUsers(
    @Query("perms") includePermissions?: boolean,
    @Query("discord") includeDiscord?: boolean,
  ): DataResponse<UserProfile[]> {
    return {
      data: await this.userProfiles.getUsers(
        includePermissions,
        includeDiscord,
      ),
    };
  }
}
