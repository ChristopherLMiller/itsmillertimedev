import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post as NestPost,
} from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { DataResponse } from '../../../../DataResponse';
import { PostService } from './post.service';

@Controller({ version: '1', path: 'post' })
export class PostController {
  constructor(private readonly postService: PostService) {}

  @NestPost('/')
  async create(
    @Body() createPostDto: Post
  ): Promise<DataResponse<Post | Prisma.BatchPayload>> {
    return { data: await this.postService.create(createPostDto) };
  }

  @Get('/')
  async findAll() {
    return this.postService.findAll();
  }

  @Get(':slug')
  async findOne(@Param('slug') slug: string) {
    return this.postService.findOne(slug);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: Post) {
    return this.postService.update(+id, updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
