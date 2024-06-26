
import {ApiExtraModels,ApiProperty} from '@nestjs/swagger'
import {IsInt,IsNotEmpty,ValidateNested} from 'class-validator'
import {Type} from 'class-transformer'

export class PermissionsToRolesRoleIdPermissionIdUniqueInputDto {
    @ApiProperty({
  type: 'integer',
  format: 'int32',
})
@IsNotEmpty()
@IsInt()
roleId: number ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
@IsNotEmpty()
@IsInt()
permissionId: number ;
  }

@ApiExtraModels(PermissionsToRolesRoleIdPermissionIdUniqueInputDto)
export class ConnectPermissionsToRolesDto {
  @ApiProperty({
  type: PermissionsToRolesRoleIdPermissionIdUniqueInputDto,
})
@IsNotEmpty()
@ValidateNested()
@Type(() => PermissionsToRolesRoleIdPermissionIdUniqueInputDto)
roleId_permissionId: PermissionsToRolesRoleIdPermissionIdUniqueInputDto ;
}
