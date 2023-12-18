import { Gallery } from "./gallery";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class GalleryCategory {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  slug: string;

  @ApiPropertyOptional({ type: Number })
  galleryId?: number;

  @ApiPropertyOptional({ type: () => Gallery })
  Gallery?: Gallery;
}
