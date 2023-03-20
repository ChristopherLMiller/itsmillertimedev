import { Post } from './post';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Image {
  @ApiProperty({ type: String })
  public_id: string;

  @ApiPropertyOptional({ type: Number })
  version?: number;

  @ApiPropertyOptional({ type: String })
  format?: string;

  @ApiPropertyOptional({ type: String })
  url?: string;

  @ApiPropertyOptional({ type: String })
  secureUrl?: string;

  @ApiPropertyOptional({ type: String })
  base64?: string;

  @ApiPropertyOptional({ type: String })
  alt?: string;

  @ApiPropertyOptional({ type: String })
  caption?: string;

  @ApiPropertyOptional({ type: Number })
  width?: number;

  @ApiPropertyOptional({ type: Number })
  height?: number;

  @ApiPropertyOptional({ type: Number })
  bytes?: number;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiPropertyOptional({ type: String })
  thumbnail?: string;

  @ApiPropertyOptional({ type: Object })
  exif?: object;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ isArray: true, type: () => Post })
  Post: Post[];
}
