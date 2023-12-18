import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class Marker {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: Number })
  lat: number;

  @ApiProperty({ type: Number })
  lon: number;

  @ApiPropertyOptional({ type: String })
  siteURL?: string;

  @ApiPropertyOptional({ type: String })
  galleryURL?: string;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: Number })
  rating: number;

  @ApiProperty({ type: Boolean })
  visited: boolean;

  @ApiProperty({ type: Number })
  visits: number;
}
