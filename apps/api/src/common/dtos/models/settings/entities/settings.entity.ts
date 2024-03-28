
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class Settings {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
key: string ;
@ApiProperty({
  type: () => Object,
})
value: Prisma.JsonValue ;
}
