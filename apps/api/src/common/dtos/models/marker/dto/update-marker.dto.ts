
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'
import {IsDecimal,IsOptional,IsString} from 'class-validator'




export class UpdateMarkerDto {
  @ApiProperty({
  type: 'number',
  format: 'double',
  required: false,
})
@IsOptional()
@IsDecimal()
lat?: Prisma.Decimal ;
@ApiProperty({
  type: 'number',
  format: 'double',
  required: false,
})
@IsOptional()
@IsDecimal()
lon?: Prisma.Decimal ;
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
@ApiProperty({
  required: false,
})
@IsOptional()
@IsString()
title?: string ;
}
