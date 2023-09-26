import { Gallery } from './gallery';
import { PublicationStatus, Visibility } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class GalleryImage {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  slug: string;

  @ApiProperty({ enum: PublicationStatus, enumName: 'PublicationStatus' })
  published: PublicationStatus;

  @ApiProperty({ type: Date })
  publishedAt: Date;

  @ApiPropertyOptional({ enum: Visibility, enumName: 'Visibility' })
  visibility?: Visibility;

  @ApiProperty({ type: String })
  url: string;

  @ApiProperty({ isArray: true, type: () => Gallery })
  galleries: Gallery[];
}
