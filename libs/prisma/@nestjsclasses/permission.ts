import { PermissionsToRoles } from './permissions_to_roles';
import { ApiProperty } from '@nestjs/swagger';

export class Permission {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  node: string;

  @ApiProperty({ isArray: true, type: () => PermissionsToRoles })
  roles: PermissionsToRoles[];
}
