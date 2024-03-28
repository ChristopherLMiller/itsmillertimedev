
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDecimal,IsNotEmpty,IsOptional,IsString} from 'class-validator'




export class CreateMarkerDto {
  @ApiProperty({
  type: 'number',
  format: 'double',
})
@IsNotEmpty()
@IsDecimal()
lat: Prisma.Decimal ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
@IsNotEmpty()
@IsDecimal()
lon: Prisma.Decimal ;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
siteURL?: string  | null;
@ApiProperty({
  required: false,
  nullable: true,
})
@IsOptional()
@IsString()
galleryURL?: string  | null;
@ApiProperty()
@IsNotEmpty()
@IsString()
title: string ;
}
