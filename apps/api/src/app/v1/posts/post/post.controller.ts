import { Response } from '@itsmillertimedev/data';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Prisma, Post as PrismaPost } from '@prisma/client';
import {
  PermissionsPublic,
  PermissionsRequired,
} from '../../../../common/decorators/auth.decorator';
import { supabaseAuthGuard } from '../../../../common/guards/supabaseAuth.guard';
import { PostService } from './post.service';

@Controller({ version: '1', path: 'post' })
@ApiTags('Post')
@UseGuards(supabaseAuthGuard)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/')
  @HttpCode(200)
  @ApiOperation({ summary: 'Creates a new Post' })
  @ApiResponse({
    status: 200,
    description: 'Successfully created new post',
  })
  @ApiResponse({
    status: 403,
    description: 'Must be authenticated to create new resource',
  })
  @PermissionsRequired('POST.CREATE')
  async create(
    @Body() createPostData: Prisma.PostCreateInput
  ): Response<PrismaPost | Prisma.BatchPayload> {
    return { data: await this.postService.create(createPostData) };
  }

  @Get('/')
  @HttpCode(200)
  @ApiOperation({ summary: 'Gets all posts' })
  @ApiResponse({
    status: 200,
    description: 'All posts',
  })
  @PermissionsPublic()
  async findAll(
    @Query() query: Prisma.PostFindManyArgs
  ): Response<Partial<PrismaPost[]>> {
    return { ...(await this.postService.findAll(query)) };
  }

  @Get(':slug')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get Specific Post' })
  @ApiQuery({ name: 'slug', description: 'Slug of the post to fetch' })
  @ApiResponse({
    status: 200,
    description: 'Post to get',
  })
  @ApiResponse({ status: 403, description: 'Forbidden, check auth key' })
  @PermissionsPublic()
  async findOne(@Param('slug') slug: string): Response<PrismaPost> {
    return { data: await this.postService.findOne(slug), meta: { slug } };
  }

  @Patch(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'update a post' })
  @ApiQuery({ name: 'slug', description: 'Slug of post to update' })
  @ApiResponse({
    status: 200,
    description: 'Successfully created new post',
  })
  @ApiResponse({ status: 403, description: 'Forbidden, check auth key' })
  async update(
    @Param('id') id: string,
    @Body() updatePostDto: PrismaPost
  ): Response<string> {
    return { data: await this.postService.update(+id, updatePostDto) };
  }

  @Delete(':id')
  @HttpCode(200)
  @ApiOperation({ summary: 'Delete a post Post' })
  @ApiQuery({ name: 'slug', description: 'Slug of the post to delete' })
  @ApiResponse({
    status: 200,
    description: 'Post successfully deleted',
  })
  @ApiResponse({ status: 403, description: 'Forbidden, check auth key' })
  async remove(@Param('id') id: string): Response<string> {
    return { data: await this.postService.remove(+id) };
  }
}
