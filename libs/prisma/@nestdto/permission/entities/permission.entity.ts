
import {PermissionsToRoles} from '../../permissionsToRoles/entities/permissionsToRoles.entity'


export class Permission {
  id: number ;
node: string ;
roles?: PermissionsToRoles[] ;
}
