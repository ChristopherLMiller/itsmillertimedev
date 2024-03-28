
import {ApiProperty} from '@nestjs/swagger'
import {PermissionsToRoles} from '../../permissionsToRoles/entities/permissionsToRoles.entity'
import {UserProfile} from '../../userProfile/entities/userProfile.entity'


export class Role {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
name: string ;
@ApiProperty()
isDefault: boolean ;
@ApiProperty({
  type: () => PermissionsToRoles,
  isArray: true,
  required: false,
})
permissions?: PermissionsToRoles[] ;
@ApiProperty({
  type: () => UserProfile,
  isArray: true,
  required: false,
})
User?: UserProfile[] ;
}
