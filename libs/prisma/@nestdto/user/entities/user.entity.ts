
import {Prisma} from '@prisma/client'
import {Role} from '../../role/entities/role.entity'


export class User {
  id: number ;
supabaseId: string ;
email: string ;
role?: Role ;
roleId: number ;
meta: Prisma.JsonValue  | null;
}
