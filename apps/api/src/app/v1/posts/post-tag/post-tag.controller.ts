import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostTag, Prisma } from '@prisma/client';
import { HttpStatusCode } from 'axios';
import {
  PermissionsNodes,
  PermissionsPublic,
} from '../../../../common/decorators/auth.decorator';
import { supabaseAuthGuard } from '../../../../common/guards/supabaseAuth.guard';
import { DataResponse } from '../../../../lib/response';
import { PostsTagsPermissionNodes } from './permissions.nodes';
import { PostTagService } from './post-tag.service';

@Controller({ version: '1', path: 'post-tag' })
@ApiTags('Post', 'Post Tag')
@UseGuards(supabaseAuthGuard)
export class PostTagController {
  constructor(private readonly postTagService: PostTagService) {}

  @Post()
  @ApiOperation({ summary: 'Creates new post tag' })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Succefully created new tag/tags',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  @PermissionsNodes(PostsTagsPermissionNodes.CREATE_TAG)
  async create(
    @Body() createPostTagDto: PostTag,
  ): DataResponse<PostTag | Prisma.BatchPayload> {
    return {
      data: await this.postTagService.create(createPostTagDto),
      meta: {},
    };
  }

  @Get('/')
  @ApiOperation({ summary: 'Fetches all post tags' })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Object containing all tag',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  @PermissionsPublic()
  async findAll(): DataResponse<PostTag[]> {
    return { data: await this.postTagService.findAll(), meta: {} };
  }

  @Get(':slug')
  @ApiParam({ name: 'slug', description: 'slug of the post to get' })
  @ApiOperation({ summary: 'Fetches single post tag' })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Object containing a singular Tag',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  @PermissionsPublic()
  async findOne(@Param('slug') slug: string): DataResponse<PostTag> {
    return { data: await this.postTagService.findOne(slug), meta: { slug } };
  }

  @Patch(':slug')
  @ApiParam({ name: 'slug', description: 'slug for the Tag to update' })
  @ApiOperation({ summary: 'Creates new post tag' })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Object containing the updated post Tag',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  @PermissionsNodes(PostsTagsPermissionNodes.UPDATE_TAG)
  async update(
    @Param('slug') slug: string,
    @Body() updatePostTagDto: PostTag,
  ): DataResponse<PostTag> {
    return {
      data: await this.postTagService.update(slug, updatePostTagDto),
      meta: { slug },
    };
  }

  @Delete(':slug')
  @ApiParam({ name: 'slug', description: 'slug of the Tag to be removed' })
  @ApiOperation({ summary: 'Creates new post tag' })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Successful removal of the Tag',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  @PermissionsNodes(PostsTagsPermissionNodes.DELETE_TAG)
  async remove(@Param('slug') slug: string): DataResponse<PostTag> {
    return { data: await this.postTagService.remove(slug), meta: { slug } };
  }
}
