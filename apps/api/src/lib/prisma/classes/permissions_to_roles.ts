import { Role } from "./role";
import { Permission } from "./permission";
import { ApiProperty } from "@nestjs/swagger";

export class PermissionsToRoles {
  @ApiProperty({ type: () => Role })
  Role: Role;

  @ApiProperty({ type: Number })
  roleId: number;

  @ApiProperty({ type: () => Permission })
  Permission: Permission;

  @ApiProperty({ type: Number })
  permissionId: number;
}
