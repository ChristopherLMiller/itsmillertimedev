import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Prisma, Post as PrismaPost } from '@prisma/client';
import { HttpStatusCode } from 'axios';
import {
  PermissionsNodes,
  PermissionsPublic,
} from '../../../../common/decorators/auth.decorator';
import { supabaseAuthGuard } from '../../../../common/guards/supabaseAuth.guard';
import { DataResponse } from '../../../../lib/response';
import { PostPermissionNodes } from './permissions.nodes';
import { PostService } from './post.service';

@Controller({ version: '1', path: 'post' })
@ApiTags('Post')
@UseGuards(supabaseAuthGuard)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/')
  @ApiOperation({ summary: 'Creates a new Post' })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Successfully created new post',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Must be authenticated to create new resource',
  })
  @PermissionsNodes(PostPermissionNodes.CREATE_POST)
  async create(
    @Body() createPostData: Prisma.PostCreateInput,
  ): DataResponse<PrismaPost | Prisma.BatchPayload> {
    return { data: await this.postService.create(createPostData) };
  }

  @Get('/')
  @ApiOperation({ summary: 'Gets all posts' })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'All posts',
  })
  @PermissionsPublic()
  async findAll(
    @Query() query: Prisma.PostFindManyArgs,
  ): DataResponse<Partial<PrismaPost[]>> {
    return { ...(await this.postService.findAll(query)) };
  }

  @Get(':slug')
  @ApiOperation({ summary: 'Get Specific Post' })
  @ApiQuery({ name: 'slug', description: 'Slug of the post to fetch' })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Post to get',
  })
  @PermissionsPublic()
  async findOne(@Param('slug') slug: string): DataResponse<PrismaPost> {
    return { data: await this.postService.findOne(slug), meta: { slug } };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'update a post' })
  @ApiQuery({ name: 'slug', description: 'Slug of post to update' })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Successfully created new post',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden, check auth key',
  })
  @PermissionsNodes(PostPermissionNodes.UPDATE_POST)
  async update(): DataResponse<string> {
    return { data: null };
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a post Post' })
  @ApiQuery({ name: 'slug', description: 'Slug of the post to delete' })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Post successfully deleted',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden, check auth key',
  })
  @PermissionsNodes(PostPermissionNodes.DELETE_POST)
  async remove(): DataResponse<string> {
    return { data: null };
  }
}
