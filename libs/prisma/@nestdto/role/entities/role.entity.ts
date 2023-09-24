
import {PermissionsToRoles} from '../../permissionsToRoles/entities/permissionsToRoles.entity'
import {User} from '../../user/entities/user.entity'


export class Role {
  id: number ;
name: string ;
permissions?: PermissionsToRoles[] ;
User?: User[] ;
}
