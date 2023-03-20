import { Post } from './post';
import { ApiProperty } from '@nestjs/swagger';

export class PostCategory {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  slug: string;

  @ApiProperty({ type: String })
  title: string;

  @ApiProperty({ isArray: true, type: () => Post })
  posts: Post[];
}
