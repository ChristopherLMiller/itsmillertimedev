
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class UserProfileDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
supabaseId: string ;
@ApiProperty()
email: string ;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
meta: Prisma.JsonValue  | null;
}
