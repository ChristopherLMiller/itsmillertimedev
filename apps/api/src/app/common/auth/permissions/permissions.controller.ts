import { DataResponse, Permission } from "@itsmillertimedev/data";
import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Selectable } from "kysely";
import { PermissionsNodes } from "../../../../global/decorators/auth.decorator";
import { PermissionsPermissionNodes } from "./permissions.permissions";
import { PermissionsService } from "./permissions.service";

@Controller({ path: "auth/permissions" })
@ApiTags("Authentication", "Permissions")
export class PermissionsController {
  constructor(private permissionService: PermissionsService) {}

  @Get("update")
  @PermissionsNodes(PermissionsPermissionNodes.UPDATE_PERMISSIONS)
  async updatePermissionsNodes() {
    return await this.permissionService.updatePermissionNodes();
  }

  @Get("/")
  @PermissionsNodes(PermissionsPermissionNodes.GET_PERMISSIONS)
  async getPermissionsNodes(): DataResponse<{
    nodes: Selectable<Permission>[];
    total: number;
  }> {
    return { data: await this.permissionService.getPermissionsNodes() };
  }
}
