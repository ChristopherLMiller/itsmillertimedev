
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class UpdatePermissionDto {
  @ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
node?: string ;
}
