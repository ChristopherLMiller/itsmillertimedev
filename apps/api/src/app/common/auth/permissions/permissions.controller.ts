import { DataResponse } from "@itsmillertimedev/data";
import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Permission } from "@prisma/client";
import { ApiKeyAuthGuard } from "../../../../common/guards/apiKeyAuth.guard";
import { SupabaseAuthGuard } from "../../../../common/guards/supabaseAuth.guard";
import { PermissionsService } from "./permissions.service";

@Controller({ path: "auth/permissions" })
@ApiTags("Authentication", "Permissions")
@UseGuards(SupabaseAuthGuard, ApiKeyAuthGuard)
export class PermissionsController {
  constructor(private permissionService: PermissionsService) {}

  @Get("update")
  async updatePermissionsNodes() {
    return await this.permissionService.updatePermissionNodes();
  }

  @Get("")
  async getPermissionsNodes(): DataResponse<Permission[]> {
    return { data: await this.permissionService.getPermissionsNodes() };
  }
}
