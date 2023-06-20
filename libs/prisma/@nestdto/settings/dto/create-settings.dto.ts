
import {Prisma} from '@prisma/client'




export class CreateSettingsDto {
  key: string;
value: Prisma.InputJsonValue;
}
