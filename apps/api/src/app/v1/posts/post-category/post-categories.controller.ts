import { DB, DataResponse, PostCategory } from "@itsmillertimedev/data";
import { CacheInterceptor } from "@nestjs/cache-manager";
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseInterceptors,
} from "@nestjs/common";
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from "@nestjs/swagger";
import { HttpStatusCode } from "axios";
import {
  DeleteResult,
  Insertable,
  Selectable,
  UpdateObject,
  UpdateResult,
} from "kysely";
import { PermissionsNodes } from "../../../../global/decorators/auth.decorator";
import { PostCategoriesService } from "./post-categories.service";
import { PostCategoryPermissionNodes } from "./post-category.permissions";

@Controller({ version: "1", path: "posts/categories" })
@ApiTags("Post", "Post Category")
@UseInterceptors(CacheInterceptor)
export class PostCategoriesController {
  constructor(private readonly postCategoriesService: PostCategoriesService) {}

  @Post()
  @ApiOperation({ summary: "Creates new post categories" })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: "Succefully created new categor(y/ies)",
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  @PermissionsNodes(PostCategoryPermissionNodes.CATEGORY_CREATE)
  async create(
    @Body() postCategories: Insertable<PostCategory>,
  ): DataResponse<Insertable<PostCategory>> {
    return {
      data: await this.postCategoriesService.create(postCategories),
    };
  }

  @Get("/")
  @ApiOperation({ summary: "Fetches all post categories" })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: "Object containing all categories",
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  async findAll(): DataResponse<Selectable<PostCategory>[]> {
    return { data: await this.postCategoriesService.findAll() };
  }

  @Get("/:slug")
  @ApiParam({ name: "slug", description: "slug of the post to get" })
  @ApiOperation({ summary: "Fetches single post categories" })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: "Object containing a singular category",
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  async findOne(
    @Param("slug") slug: string,
  ): DataResponse<Selectable<PostCategory>> {
    return {
      data: await this.postCategoriesService.findOne(slug),
      meta: { slug },
    };
  }

  @Patch("/:slug")
  @ApiParam({ name: "slug", description: "slug for the category to update" })
  @ApiOperation({ summary: "Updates a post category" })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: "Object containing the updated post category",
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  @PermissionsNodes(PostCategoryPermissionNodes.CATEGORY_UPDATE)
  async update(
    @Param("slug") slug: string,
    @Body() updatePostCategoryDto: UpdateObject<DB, "PostCategory">,
  ): DataResponse<UpdateResult[]> {
    return {
      data: await this.postCategoriesService.update(
        slug,
        updatePostCategoryDto,
      ),
      meta: { slug },
    };
  }

  @Delete("/:slug")
  @ApiParam({ name: "slug", description: "slug of the category to be removed" })
  @ApiOperation({ summary: "Deletes a post category" })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: "Successful removal of the category",
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  @PermissionsNodes(PostCategoryPermissionNodes.CATEGORY_DELETE)
  async remove(@Param("slug") slug: string): DataResponse<DeleteResult[]> {
    return {
      data: await this.postCategoriesService.remove(slug),
      meta: { slug },
    };
  }
}
