import { Model } from "./model";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class ModelTags {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  slug: string;

  @ApiProperty({ type: String })
  title: string;

  @ApiPropertyOptional({ type: () => Model })
  Model?: Model;

  @ApiPropertyOptional({ type: Number })
  modelId?: number;
}
