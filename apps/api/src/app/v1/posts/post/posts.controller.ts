import { DataResponse } from "@itsmillertimedev/data";
import { CacheInterceptor } from "@nestjs/cache-manager";
import {
  Body,
  Controller,
  Delete,
  Get,
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
import { Prisma, Post as PrismaPost } from "@prisma/client";
import { HttpStatusCode } from "axios";
import { PermissionsNodes } from "../../../../common/decorators/auth.decorator";
import { PostPermissionNodes } from "./post.permissions";
import { PostsService } from "./posts.service";

@Controller({ version: "1", path: "posts/posts" })
@ApiTags("Post")
@UseInterceptors(CacheInterceptor)
export class PostsController {
  constructor(private readonly postService: PostsService) {}

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
    @Body() createPostData: Prisma.PostCreateInput,
  ): DataResponse<PrismaPost | Prisma.BatchPayload> {
    return { data: await this.postService.create(createPostData) };
  }

  @Get("/")
  @ApiOperation({ summary: "Gets all posts" })
  @ApiResponse({
    status: HttpStatusCode.Ok,
    description: "All posts",
  })
  async findAll(
    @Query() query: Prisma.PostFindManyArgs,
  ): DataResponse<Partial<PrismaPost[]>> {
    return { ...(await this.postService.findAll(query)) };
  }

  @Get(":id")
  @ApiOperation({ summary: "Get Specific Post" })
  @ApiQuery({ name: "id", description: "Slug or ID of the post to fetch" })
  @ApiOkResponse({
    description: "Post to get",
  })
  async findOne(@Param("id") id: string): DataResponse<PrismaPost> {
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
