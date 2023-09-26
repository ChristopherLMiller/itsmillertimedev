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
  UseGuards,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiSecurity,
  ApiTags,
} from '@nestjs/swagger';
import { PostTag, Prisma } from '@prisma/client';
import { PermissionsPublic } from '../../../../common/decorators/auth.decorator';
import { supabaseAuthGuard } from '../../../../common/guards/supabaseAuth.guard';
import { PostTagService } from './post-tag.service';

@Controller({ version: '1', path: 'post-tag' })
@ApiTags('Post', 'Post Tag')
@ApiSecurity('x-api-key')
@UseGuards(supabaseAuthGuard)
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
    @Body() createPostTagDto: PostTag,
  ): Response<PostTag | Prisma.BatchPayload> {
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
  @PermissionsPublic()
  async findAll(): Response<PostTag[]> {
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
  @PermissionsPublic()
  async findOne(@Param('slug') slug: string): Response<PostTag> {
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
    @Body() updatePostTagDto: PostTag,
  ): Response<PostTag> {
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
  async remove(@Param('slug') slug: string): Response<PostTag> {
    return { data: await this.postTagService.remove(slug), meta: { slug } };
  }
}
