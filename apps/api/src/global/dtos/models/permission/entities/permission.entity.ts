
import {ApiProperty} from '@nestjs/swagger'
import {PermissionsToRoles} from '../../permissionsToRoles/entities/permissionsToRoles.entity'


export class Permission {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
node: string ;
@ApiProperty({
  type: () => PermissionsToRoles,
  isArray: true,
  required: false,
})
roles?: PermissionsToRoles[] ;
}
