import { Response } from '@itsmillertimedev/data';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Post as NestPost,
  Param,
  Patch,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { Post, Prisma } from '@prisma/client';
import { BasicAuthGuard } from '../../../../common/guards/basicAuth.guard';
import { ResponseTransformInterceptor } from '../../../../common/interceptors/responseTransform.interceptor';
import { PrismaDTO } from '../../../../common/prisma/prisma.dto';
import { PostService } from './post.service';

@Controller({ version: '1', path: 'post' })
@ApiTags('Post')
@UseGuards(BasicAuthGuard)
@ApiSecurity('x-api-key')
@UseInterceptors(ResponseTransformInterceptor)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @NestPost('/')
  @HttpCode(200)
  @ApiOperation({ summary: 'Creates a new Post' })
  @ApiResponse({
    status: 200,
    description: 'Successfully created new post',
  })
  @ApiResponse({ status: 403, description: 'Forbidden, check auth key' })
  async create(
    @Body() createPostDto: Post
  ): Response<Post | Prisma.BatchPayload> {
    // Response<Post | Prisma.BatchPayload>> {
    return { data: await this.postService.create(createPostDto) };
  }

  @Get('/')
  @HttpCode(200)
  @ApiOperation({ summary: 'Gets all posts' })
  @ApiResponse({
    status: 200,
    description: 'All posts',
  })
  @ApiResponse({ status: 403, description: 'Forbidden, check auth key' })
  async findAll(@Query() query: PrismaDTO): Response<Partial<Post[]>> {
    return { ...(await this.postService.findAll(query)) };
  }

  @Get('/count')
  @HttpCode(200)
  @ApiOperation({ summary: 'Count how many posts there are' })
  @ApiResponse({
    status: 200,
    description: 'Count of posts',
  })
  @ApiResponse({ status: 403, description: 'Forbidden, check auth key' })
  async getCount(): Response<number> {
    return {
      data: await this.postService.getCount(''),
    };
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
  async findOne(@Param('slug') slug: string): Response<Post> {
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
    @Body() updatePostDto: Post
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
