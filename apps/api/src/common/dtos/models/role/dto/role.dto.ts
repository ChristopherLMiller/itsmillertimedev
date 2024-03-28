
import {ApiProperty} from '@nestjs/swagger'


export class RoleDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
name: string ;
@ApiProperty()
isDefault: boolean ;
}
