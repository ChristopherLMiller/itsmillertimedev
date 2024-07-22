
import {ApiProperty} from '@nestjs/swagger'
import {IsOptional,IsString} from 'class-validator'




export class UpdateMinecraftRuleDto {
  @ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
name?: string ;
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
description?: string ;
}
