
import {Prisma} from '@prisma/client'




export class UpdateSettingsDto {
  key?: string;
value?: Prisma.InputJsonValue;
}
