
import {ApiProperty} from '@nestjs/swagger'


export class PermissionDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
node: string ;
}
