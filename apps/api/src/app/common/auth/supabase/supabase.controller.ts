import { DataResponse } from "@itsmillertimedev/data";
import { Body, Controller, Logger, Post } from "@nestjs/common";
import { ApiOkResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import { UserResponse } from "@supabase/supabase-js";
import { IgnoreLogging } from "../../../../global/decorators/logging.decorator";
import { SupabaseService } from "./supabase.service";

@Controller({ path: "auth/supabase" })
@ApiTags("Authentication", "Permissions")
export class SupabaseController {
  constructor(private supabaseService: SupabaseService) {}

  private readonly _logger = new Logger(SupabaseController.name);

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
