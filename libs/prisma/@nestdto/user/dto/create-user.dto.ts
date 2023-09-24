
import {Prisma} from '@prisma/client'




export class CreateUserDto {
  supabaseId: string;
email: string;
meta?: Prisma.InputJsonValue;
}
