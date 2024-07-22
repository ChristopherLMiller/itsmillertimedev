
import {ApiProperty} from '@nestjs/swagger'
import {IsNotEmpty,IsString} from 'class-validator'




export class CreateMinecraftRuleDto {
  @ApiProperty()
@IsNotEmpty()
@IsString()
name: string ;
@ApiProperty()
@IsNotEmpty()
@IsString()
description: string ;
}
