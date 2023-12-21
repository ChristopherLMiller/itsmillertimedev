import { SupabaseWebhookResponse } from "@itsmillertimedev/data";
import { Body, Controller, Logger, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { User } from "@prisma/client";
import { HookdeckGuard } from "../../../../common/guards/hookdeck.guard";
import { SupabaseService } from "./supabase.service";

@Controller({ path: "auth/supabase" })
@ApiTags("Authentication", "Permissions")
export class SupabaseController {
  constructor(private supabaseService: SupabaseService) {}

  private readonly _logger = new Logger(SupabaseController.name);

  @Post("webhook")
  @UseGuards(HookdeckGuard)
  async SupabaseWebhookUser(
    @Body() body: SupabaseWebhookResponse,
  ): Promise<User> {
    if (body.type === "INSERT") {
      return this.supabaseService.createUser(body.record);
    } else if (body.type === "DELETE") {
      return this.supabaseService.deleteUser(body.old_record.id);
    }
  }
}
