import { DataResponse, PostTag } from "@itsmillertimedev/data";
import { CacheInterceptor, CacheTTL } from "@nestjs/cache-manager";
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
import { DeleteResult, Insertable, Selectable, UpdateResult } from "kysely";
import { PermissionsNodes } from "../../../../common/decorators/auth.decorator";
import { PostsTagsPermissionNodes } from "./post-tag.permissions";
import { PostTagsService } from "./post-tags.service";

@Controller({ version: "1", path: "posts/tags" })
@UseInterceptors(CacheInterceptor)
@CacheTTL(60 * 1000) // 1 Minute
@ApiTags("Post", "Post Tag")
export class PostTagsController {
  constructor(private readonly postTagService: PostTagsService) {}

  @Post()
  @ApiOperation({ summary: "Creates new post tag" })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: "Succefully created new tag/tags",
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  @PermissionsNodes(PostsTagsPermissionNodes.CREATE_TAG)
  async create(@Body() postTag: PostTag): DataResponse<Insertable<PostTag>> {
    return {
      data: await this.postTagService.create(postTag),
      meta: {},
    };
  }

  @Get("/")
  @ApiOperation({ summary: "Fetches all post tags" })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: "Object containing all tag",
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  async findAll(): DataResponse<Selectable<PostTag>[]> {
    return { data: await this.postTagService.findAll(), meta: {} };
  }

  @Get("/:slug")
  @ApiParam({ name: "slug", description: "slug of the post to get" })
  @ApiOperation({ summary: "Fetches single post tag" })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: "Object containing a singular Tag",
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  async findOne(
    @Param("slug") slug: string,
  ): DataResponse<Selectable<PostTag>> {
    return { data: await this.postTagService.findOne(slug), meta: { slug } };
  }

  @Patch("/:slug")
  @ApiParam({ name: "slug", description: "slug for the Tag to update" })
  @ApiOperation({ summary: "Creates new post tag" })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: "Object containing the updated post Tag",
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  @PermissionsNodes(PostsTagsPermissionNodes.UPDATE_TAG)
  async update(
    @Param("slug") slug: string,
    @Body() updatePostTagDto: PostTag,
  ): DataResponse<UpdateResult[]> {
    return {
      data: await this.postTagService.update(slug, updatePostTagDto),
      meta: { slug },
    };
  }

  @Delete("/:slug")
  @ApiParam({ name: "slug", description: "slug of the Tag to be removed" })
  @ApiOperation({ summary: "Creates new post tag" })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: "Successful removal of the Tag",
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden",
  })
  @PermissionsNodes(PostsTagsPermissionNodes.DELETE_TAG)
  async remove(@Param("slug") slug: string): DataResponse<DeleteResult[]> {
    // first lets dump the cache
    return { data: await this.postTagService.remove(slug), meta: { slug } };
  }
}
