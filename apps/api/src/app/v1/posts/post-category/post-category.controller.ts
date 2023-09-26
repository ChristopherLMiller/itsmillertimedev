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
import { PostCategory, Prisma } from '@prisma/client';
import { PermissionsPublic } from '../../../../common/decorators/auth.decorator';
import { supabaseAuthGuard } from '../../../../common/guards/supabaseAuth.guard';
import { PostCategoryService } from './post-category.service';

@Controller({ version: '1', path: 'post-category' })
@ApiTags('Post', 'Post Category')
@ApiSecurity('x-api-key')
@UseGuards(supabaseAuthGuard)
export class PostCategoryController {
  constructor(private readonly postCategoryService: PostCategoryService) {}

  @Post()
  @HttpCode(200)
  @ApiOperation({ summary: 'Creates new post categories' })
  @ApiResponse({
    status: 200,
    description: 'Succefully created new categor(y/ies)',
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async create(
    @Body() createPostCategoryDto: PostCategory,
  ): Response<PostCategory | Prisma.BatchPayload> {
    return {
      data: await this.postCategoryService.create(createPostCategoryDto),
      meta: {},
    };
  }

  @Get('/')
  @HttpCode(200)
  @ApiOperation({ summary: 'Fetches all post categories' })
  @ApiResponse({
    status: 200,
    description: 'Object containing all categories',
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @PermissionsPublic()
  async findAll(): Response<PostCategory[]> {
    return { data: await this.postCategoryService.findAll(), meta: {} };
  }

  @Get(':slug')
  @HttpCode(200)
  @ApiParam({ name: 'slug', description: 'slug of the post to get' })
  @ApiOperation({ summary: 'Fetches single post categories' })
  @ApiResponse({
    status: 200,
    description: 'Object containing a singular category',
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  @PermissionsPublic()
  async findOne(@Param('slug') slug: string) {
    return {
      data: await this.postCategoryService.findOne(slug),
      meta: { slug },
    };
  }

  @Patch(':slug')
  @HttpCode(200)
  @ApiParam({ name: 'slug', description: 'slug for the category to update' })
  @ApiOperation({ summary: 'Updates a post category' })
  @ApiResponse({
    status: 200,
    description: 'Object containing the updated post category',
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async update(
    @Param('slug') slug: string,
    @Body() updatePostCategoryDto: PostCategory,
  ): Response<PostCategory> {
    return {
      data: await this.postCategoryService.update(slug, updatePostCategoryDto),
      meta: { slug },
    };
  }

  @Delete(':slug')
  @HttpCode(200)
  @ApiParam({ name: 'slug', description: 'slug of the category to be removed' })
  @ApiOperation({ summary: 'Deletes a post category' })
  @ApiResponse({
    status: 200,
    description: 'Successful removal of the category',
  })
  @ApiResponse({ status: 403, description: 'Forbidden' })
  async remove(@Param('slug') slug: string): Response<PostCategory> {
    return {
      data: await this.postCategoryService.remove(slug),
      meta: { slug },
    };
  }
}
