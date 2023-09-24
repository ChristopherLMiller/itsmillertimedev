
import {Prisma} from '@prisma/client'




export class UpdateUserDto {
  supabaseId?: string;
email?: string;
meta?: Prisma.InputJsonValue;
}
