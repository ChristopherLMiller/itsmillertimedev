
import {Prisma} from '@prisma/client'


export class Settings {
  id: number ;
key: string ;
value: Prisma.JsonValue ;
}
