import { Module } from "@nestjs/common";
import { PostCategoriesModule } from "./post-category/post-categories.module";
import { PostTagsModule } from "./post-tag/post-tags.module";
import { PostsModule } from "./post/posts.module";

@Module({
  imports: [PostsModule, PostTagsModule, PostCategoriesModule],
})
export class PostsTypeModule {}
