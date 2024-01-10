import { PermissionsToRoles } from "./permissions_to_roles";
import { UserProfile } from "./user_profile";
import { ApiProperty } from "@nestjs/swagger";

export class Role {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ isArray: true, type: () => PermissionsToRoles })
  permissions: PermissionsToRoles[];

  @ApiProperty({ isArray: true, type: () => UserProfile })
  User: UserProfile[];
}
