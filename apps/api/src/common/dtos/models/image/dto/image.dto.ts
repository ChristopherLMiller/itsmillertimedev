
import {Prisma} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'


export class ImageDto {
  @ApiProperty({
  type: 'integer',
  format: 'int32',
})
id: number ;
@ApiProperty()
public_id: string ;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
version: number  | null;
@ApiProperty({
  nullable: true,
})
format: string  | null;
@ApiProperty({
  nullable: true,
})
url: string  | null;
@ApiProperty({
  nullable: true,
})
secureUrl: string  | null;
@ApiProperty({
  nullable: true,
})
alt: string  | null;
@ApiProperty({
  nullable: true,
})
caption: string  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
width: number  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
height: number  | null;
@ApiProperty({
  type: 'integer',
  format: 'int32',
  nullable: true,
})
bytes: number  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
createdAt: Date ;
@ApiProperty({
  nullable: true,
})
thumbnail: string  | null;
@ApiProperty({
  type: () => Object,
  nullable: true,
})
exif: Prisma.JsonValue  | null;
@ApiProperty({
  type: 'string',
  format: 'date-time',
})
updatedAt: Date ;
}
