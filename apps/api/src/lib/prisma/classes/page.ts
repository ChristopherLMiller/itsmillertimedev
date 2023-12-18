import { Image } from "./image";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class Page {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  slug: string;

  @ApiProperty({ type: String })
  summary: string;

  @ApiPropertyOptional({ type: String })
  content?: string;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiPropertyOptional({ type: () => Image })
  featuredImage?: Image;

  @ApiPropertyOptional({ type: String })
  imagePublic_id?: string;

  @ApiProperty({ type: Boolean })
  isPublic: boolean;
}
