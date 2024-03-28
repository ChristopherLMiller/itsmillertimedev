
import {ApiProperty} from '@nestjs/swagger'
import {Role} from '../../role/entities/role.entity'
import {Permission} from '../../permission/entities/permission.entity'


export class PermissionsToRoles {
  @ApiProperty({
  type: () => Role,
  required: false,
})
Role?: Role ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
roleId: number ;
@ApiProperty({
  type: () => Permission,
  required: false,
})
permission?: Permission ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
permissionId: number ;
}
