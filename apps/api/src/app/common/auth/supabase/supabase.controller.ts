import { DataResponse, SupabaseWebhookResponse } from "@itsmillertimedev/data";
import { Body, Controller, Logger, Post, UseGuards } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { UserProfile } from "@prisma/client";
import { UserResponse } from "@supabase/supabase-js";
import { IgnoreLogging } from "apps/api/src/common/decorators/logging.decorator";
import { HookdeckGuard } from "../../../../common/guards/hookdeck.guard";
import { UserProfilesService } from "../userProfiles/userProfiles.service";
import { SupabaseService } from "./supabase.service";

@Controller({ path: "auth/supabase" })
@ApiTags("Authentication", "Permissions")
export class SupabaseController {
  constructor(
    private userProfiles: UserProfilesService,
    private supabaseService: SupabaseService,
  ) {}

  private readonly _logger = new Logger(SupabaseController.name);

  @Post("webhook")
  @ApiOperation({ summary: "Webhook endpoint to insert user data from prisma" })
  @UseGuards(HookdeckGuard)
  async SupabaseWebhookUser(
    @Body() body: SupabaseWebhookResponse,
  ): Promise<UserProfile> {
    if (body.type === "INSERT") {
      return this.userProfiles.createUser(body.record);
    } else if (body.type === "DELETE") {
      return this.userProfiles.deleteUser(body.old_record.id);
    }
  }

  @Post("/login")
  @IgnoreLogging()
  @ApiOperation({ description: "Login via Supabase" })
  @ApiOkResponse({ description: "Successfully logged in" })
  async login(
    @Body("identifier") identifier,
    @Body("password") password,
  ): DataResponse<UserResponse> {
    return { data: await this.supabaseService.login(identifier, password) };
  }
}
