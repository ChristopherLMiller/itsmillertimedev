import { DataResponse } from '@itsmillertimedev/data';
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
import { PostCategory, Prisma } from '@prisma/client';
import { BasicAuthGuard } from '../../../../common/guards/basicAuth.guard';
import { ResponseTransformInterceptor } from '../../../../common/interceptors/responseTransform.interceptor';
import { PostCategoryService } from './post-category.service';

@Controller({ version: '1', path: 'post-category' })
@ApiTags('Post', 'Post Category')
@UseGuards(BasicAuthGuard)
@ApiSecurity('x-api-key')
@UseInterceptors(ResponseTransformInterceptor)
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
    @Body() createPostCategoryDto: PostCategory
  ): Promise<DataResponse<PostCategory | Prisma.BatchPayload>> {
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
  async findAll(): Promise<DataResponse<PostCategory[]>> {
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
    @Body() updatePostCategoryDto: PostCategory
  ): Promise<DataResponse<PostCategory>> {
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
  async remove(@Param('slug') slug: string) {
    return {
      data: await this.postCategoryService.remove(slug),
      meta: { slug },
    };
  }
}
