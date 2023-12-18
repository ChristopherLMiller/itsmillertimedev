import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { Post } from "./post";

export class PostTag {
  @ApiProperty({ type: Number })
  id: number;

  @ApiPropertyOptional({ type: Number })
  postId?: number;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  slug: string;

  @ApiProperty({ type: String })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ isArray: true, type: () => Post })
  posts: Post[];
}
