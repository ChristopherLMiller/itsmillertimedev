import { ModelTags } from './model_tags';
import { Image } from './image';
import { Manufacturer } from './manufacturer';
import { Scale } from './scale';
import { Visibility } from '../.pnpm/@prisma+client@4.10.1_prisma@4.10.1/node_modules/@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Model {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  slug: string;

  @ApiProperty({ type: Boolean })
  completed: boolean = true;

  @ApiProperty({ enum: Visibility, enumName: 'Visibility' })
  visibility: Visibility;

  @ApiProperty({ type: String })
  metaTitle: string;

  @ApiProperty({ type: String })
  summary: string;

  @ApiProperty({ type: String })
  featuredImage: string;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ isArray: true, type: () => ModelTags })
  tags: ModelTags[];

  @ApiProperty({ isArray: true, type: () => Image })
  images: Image[];

  @ApiProperty({ type: () => Manufacturer })
  manufacturer: Manufacturer;

  @ApiProperty({ type: () => Scale })
  scale: Scale;

  @ApiPropertyOptional({ type: String })
  clockifyProjectId?: string;

  @ApiProperty({ type: String })
  contents: string;

  @ApiProperty({ type: Number })
  yearReleased: number;

  @ApiProperty({ type: Date })
  completedAt: Date;

  @ApiProperty({ type: String })
  imagePublic_id: string;

  @ApiProperty({ type: Number })
  manufacturerId: number;

  @ApiProperty({ type: Number })
  scaleId: number;
}
