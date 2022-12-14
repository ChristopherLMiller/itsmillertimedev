import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { PostTag, Prisma } from '@prisma/client';
import { DataResponse } from '../../../../DataResponse';
import { BasicAuthGuard } from '../../../guards/basicAuth.guard';
import { ResponseTransformInterceptor } from '../../../interceptors/responseTransform.interceptor';
import { PostTagService } from './post-tag.service';

@Controller({ version: '1', path: 'post-tag' })
@ApiTags('Post', 'Post Tag')
@UseGuards(BasicAuthGuard)
@ApiSecurity('x-api-key')
@UseInterceptors(ResponseTransformInterceptor)
export class PostTagController {
  constructor(private readonly postTagService: PostTagService) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Creates new post tag' })
  @ApiResponse({
    status: 200,
    description: 'Succefully created new tag/tags',
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async create(
    @Body() createPostTagDto: PostTag
  ): Promise<DataResponse<PostTag | Prisma.BatchPayload>> {
    return {
      data: await this.postTagService.create(createPostTagDto),
      meta: {},
    };
  }

  @Get('/')
  @HttpCode(200)
  @ApiOperation({ summary: 'Fetches all post tags' })
  @ApiResponse({
    status: 200,
    description: 'Object containing all tag',
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async findAll(): Promise<DataResponse<PostTag[]>> {
    return { data: await this.postTagService.findAll(), meta: {} };
  }

  @Get(':slug')
  @HttpCode(200)
  @ApiParam({ name: 'slug', description: 'slug of the post to get' })
  @ApiOperation({ summary: 'Fetches single post tag' })
  @ApiResponse({
    status: 200,
    description: 'Object containing a singular Tag',
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async findOne(@Param('slug') slug: string): Promise<DataResponse<PostTag>> {
    return { data: await this.postTagService.findOne(slug), meta: { slug } };
  }

  @Patch(':slug')
  @HttpCode(200)
  @ApiParam({ name: 'slug', description: 'slug for the Tag to update' })
  @ApiOperation({ summary: 'Creates new post tag' })
  @ApiResponse({
    status: 200,
    description: 'Object containing the updated post Tag',
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async update(
    @Param('slug') slug: string,
    @Body() updatePostTagDto: PostTag
  ): Promise<DataResponse<PostTag>> {
    return {
      data: await this.postTagService.update(slug, updatePostTagDto),
      meta: { slug },
    };
  }

  @Delete(':slug')
  @HttpCode(200)
  @ApiParam({ name: 'slug', description: 'slug of the Tag to be removed' })
  @ApiOperation({ summary: 'Creates new post tag' })
  @ApiResponse({
    status: 200,
    description: 'Successful removal of the Tag',
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async remove(@Param('slug') slug: string): Promise<DataResponse<PostTag>> {
    return { data: await this.postTagService.remove(slug), meta: { slug } };
  }
}
