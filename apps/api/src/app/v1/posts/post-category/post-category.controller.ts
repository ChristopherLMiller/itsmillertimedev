import { DataResponse } from '@itsmillertimedev/data';
import { CacheInterceptor } from '@nestjs/cache-manager';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PostCategory, Prisma } from '@prisma/client';
import { HttpStatusCode } from 'axios';
import { PermissionsNodes } from '../../../../common/decorators/auth.decorator';
import { PostCategoryPermissionNodes } from './permissions.nodes';
import { PostCategoryService } from './post-category.service';

@Controller({ version: '1', path: 'post-category' })
@ApiTags('Post', 'Post Category')
@UseInterceptors(CacheInterceptor)
export class PostCategoryController {
  constructor(private readonly postCategoryService: PostCategoryService) {}

  @Post()
  @ApiOperation({ summary: 'Creates new post categories' })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Succefully created new categor(y/ies)',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  @PermissionsNodes(PostCategoryPermissionNodes.CATEGORY_CREATE)
  async create(
    @Body() createPostCategoryDto: PostCategory,
  ): DataResponse<PostCategory | Prisma.BatchPayload> {
    return {
      data: await this.postCategoryService.create(createPostCategoryDto),
      meta: {},
    };
  }

  @Get('/')
  @ApiOperation({ summary: 'Fetches all post categories' })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Object containing all categories',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  async findAll(): DataResponse<PostCategory[]> {
    return { data: await this.postCategoryService.findAll(), meta: {} };
  }

  @Get(':slug')
  @ApiParam({ name: 'slug', description: 'slug of the post to get' })
  @ApiOperation({ summary: 'Fetches single post categories' })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Object containing a singular category',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  async findOne(@Param('slug') slug: string) {
    return {
      data: await this.postCategoryService.findOne(slug),
      meta: { slug },
    };
  }

  @Patch(':slug')
  @ApiParam({ name: 'slug', description: 'slug for the category to update' })
  @ApiOperation({ summary: 'Updates a post category' })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Object containing the updated post category',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  @PermissionsNodes(PostCategoryPermissionNodes.CATEGORY_UPDATE)
  async update(
    @Param('slug') slug: string,
    @Body() updatePostCategoryDto: PostCategory,
  ): DataResponse<PostCategory> {
    return {
      data: await this.postCategoryService.update(slug, updatePostCategoryDto),
      meta: { slug },
    };
  }

  @Delete(':slug')
  @ApiParam({ name: 'slug', description: 'slug of the category to be removed' })
  @ApiOperation({ summary: 'Deletes a post category' })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: 'Successful removal of the category',
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Forbidden',
  })
  @PermissionsNodes(PostCategoryPermissionNodes.CATEGORY_DELETE)
  async remove(@Param('slug') slug: string): DataResponse<PostCategory> {
    return {
      data: await this.postCategoryService.remove(slug),
      meta: { slug },
    };
  }
}
