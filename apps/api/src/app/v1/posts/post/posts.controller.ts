import { DataResponse, Post as PostType } from "@itsmillertimedev/data";
import { CacheInterceptor } from "@nestjs/cache-manager";
import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
  Query,
  UseInterceptors,
} from "@nestjs/common";
import {
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Post as PostReturnType } from "../../../../global/dtos/models/post/entities/post.entity";

import { HttpStatusCode } from "axios";
import { Insertable, Selectable } from "kysely";
import { PermissionsNodes } from "../../../../global/decorators/auth.decorator";
import { FindPostsDTO } from "../../../../global/dtos/posts/find.dto";
import { PostPermissionNodes } from "./post.permissions";
import { PostsService } from "./posts.service";

@Controller({ version: "1", path: "posts/posts" })
@ApiTags("Post")
@UseInterceptors(CacheInterceptor)
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  private readonly _logger = new Logger(PostsController.name);

  @Post("/")
  @ApiOperation({ summary: "Creates a new Post" })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: "Successfully created new post",
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Must be authenticated to create new resource",
  })
  @PermissionsNodes(PostPermissionNodes.CREATE_POST)
  async create(
    @Body() createPostData: Insertable<PostType>,
  ): DataResponse<Selectable<PostType[]>> {
    return { data: await this.postService.create(createPostData) };
  }

  @Get("/")
  @ApiOperation({ summary: "Gets all posts" })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: "All posts",
  })
  async findAll(@Query() query: FindPostsDTO): DataResponse<PostReturnType> {
    const { data, meta } = await this.postService.findAll(query);

    return {
      data: data,
      meta: {
        total: meta.total,
      },
    };
  }

  @Get(":id")
  @ApiOperation({ summary: "Get Specific Post" })
  @ApiQuery({ name: "id", description: "Slug or ID of the post to fetch" })
  @ApiOkResponse({
    description: "Post to get",
  })
  async findOne(@Param("id") id: string): DataResponse<Selectable<PostType>> {
    return { data: await this.postService.findOne(id), meta: { id } };
  }

  @Patch(":id")
  @ApiOperation({ summary: "update a post" })
  @ApiQuery({ name: "slug", description: "Slug of post to update" })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: "Successfully created new post",
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden, check auth key",
  })
  @PermissionsNodes(PostPermissionNodes.UPDATE_POST)
  async update(): DataResponse<string> {
    return { data: null };
  }

  @Delete(":id")
  @ApiOperation({ summary: "Delete a post Post" })
  @ApiQuery({ name: "slug", description: "Slug of the post to delete" })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: "Post successfully deleted",
  })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: "Forbidden, check auth key",
  })
  @PermissionsNodes(PostPermissionNodes.DELETE_POST)
  async remove(): DataResponse<string> {
    return { data: null };
  }
}
