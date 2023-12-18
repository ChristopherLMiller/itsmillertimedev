import { PermissionsToRoles } from "./permissions_to_roles";
import { User } from "./user";
import { ApiProperty } from "@nestjs/swagger";

export class Role {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ isArray: true, type: () => PermissionsToRoles })
  permissions: PermissionsToRoles[];

  @ApiProperty({ isArray: true, type: () => User })
  User: User[];
}
