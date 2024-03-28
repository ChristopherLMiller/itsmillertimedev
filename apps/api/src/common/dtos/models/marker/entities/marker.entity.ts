
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class Marker {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
lat: Prisma.Decimal ;
@ApiProperty({
  type: 'number',
  format: 'double',
})
lon: Prisma.Decimal ;
@ApiProperty({
  nullable: true,
})
siteURL: string  | null;
@ApiProperty({
  nullable: true,
})
galleryURL: string  | null;
@ApiProperty()
title: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
rating: number ;
@ApiProperty()
visited: boolean ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
})
visits: number ;
}
