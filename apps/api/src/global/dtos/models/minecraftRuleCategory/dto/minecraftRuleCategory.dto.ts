
import {ApiProperty} from '@nestjs/swagger'


export class MinecraftRuleCategoryDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
name: string ;
@ApiProperty()
icon: string ;
}
