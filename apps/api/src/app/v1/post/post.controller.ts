import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post as NestPost,
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
import { DataResponse } from '../../../../DataResponse';
import { BasicAuthGuard } from '../../../guards/basicAuth.guard';
import { ResponseTransformInterceptor } from '../../../interceptors/responseTransform.interceptor';
import { PrismaDTO } from '../../../prisma/prisma.dto';
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
  ): Promise<DataResponse<Post | Prisma.BatchPayload>> {
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
  async findAll(@Query() query: PrismaDTO): Promise<DataResponse<Post[]>> {
    const { data, meta } = await this.postService.findAll(query);
    return {
      data,
      meta,
    };
  }

  @Get('/count')
  @HttpCode(200)
  @ApiOperation({ summary: 'Count how many posts there are' })
  @ApiResponse({
    status: 200,
    description: 'Count of posts',
  })
  @ApiResponse({ status: 403, description: 'Forbidden, check auth key' })
  async getCount(): Promise<DataResponse<number>> {
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
  async findOne(@Param('slug') slug: string) {
    return this.postService.findOne(slug);
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
  async update(@Param('id') id: string, @Body() updatePostDto: Post) {
    return this.postService.update(+id, updatePostDto);
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
  async remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
