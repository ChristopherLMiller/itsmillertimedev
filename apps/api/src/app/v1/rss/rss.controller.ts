import { Controller, Get } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { PermissionsPublic } from '../../../common/decorators/auth.decorator';
import { PostService } from '../posts/post/post.service';

@Controller({ version: '1', path: 'rss' })
@ApiTags('RSS')
@ApiSecurity('x-api-key')
export class RSSController {
  constructor(private postsService: PostService) {}

  @Get('posts.xml')
  @PermissionsPublic()
  async getPostsFeed() {
    const posts = await this.postsService.findAll();
    return posts;
  }
}
