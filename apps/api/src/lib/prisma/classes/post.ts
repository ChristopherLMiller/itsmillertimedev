import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Image } from "./image";
import { PostCategory } from "./post_category";
import { PostTag } from "./post_tag";

export class Post {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ type: String })
  metaTitle: string;

  @ApiProperty({ type: String })
  slug: string;

  @ApiProperty({ type: String })
  summary: string;

  @ApiProperty({ type: Number })
  wordCount: number;

  @ApiProperty({ type: Boolean })
  published: boolean;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiPropertyOptional({ type: Date })
  publishedAt?: Date;

  @ApiProperty({ type: String })
  content: string;

  @ApiPropertyOptional({ type: String })
  imagePublic_id?: string;

  @ApiProperty({ type: Number })
  postCategoryId: number;

  @ApiPropertyOptional({ type: () => Image })
  featuredImage?: Image;

  @ApiProperty({ type: () => PostCategory })
  category: PostCategory;

  @ApiProperty({ isArray: true, type: () => PostTag })
  tags: PostTag[];
}
