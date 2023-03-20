import { GalleryCategory } from './gallery_category';
import { GalleryTag } from './gallery_tag';
import { GalleryImage } from './gallery_image';
import { Visibility } from '../.pnpm/@prisma+client@4.10.1_prisma@4.10.1/node_modules/@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class Gallery {
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

  @ApiProperty({ type: String })
  meta: string;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ enum: Visibility, enumName: 'Visibility' })
  visibility: Visibility = Visibility.PUBLIC;

  @ApiProperty({ type: Boolean })
  isNsfw: boolean;

  @ApiProperty({ type: String })
  image: string;

  @ApiProperty({ isArray: true, type: () => GalleryCategory })
  categories: GalleryCategory[];

  @ApiProperty({ isArray: true, type: () => GalleryTag })
  tags: GalleryTag[];

  @ApiProperty({ isArray: true, type: () => GalleryImage })
  images: GalleryImage[];
}
