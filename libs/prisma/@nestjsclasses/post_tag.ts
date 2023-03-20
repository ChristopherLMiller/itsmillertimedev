import { Post } from './post';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PostTag {
  @ApiProperty({ type: Number })
  id: number;

  @ApiPropertyOptional({ type: Number })
  postId?: number;

  @ApiProperty({ type: String })
  slug: string;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ isArray: true, type: () => Post })
  posts: Post[];
}
