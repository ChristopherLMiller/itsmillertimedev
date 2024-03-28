import { Module } from "@nestjs/common";
import { PostCategoriesModule } from "./post-category/post-categories.module";
import { PostsModule } from "./post/posts.module";

@Module({
  imports: [PostsModule, PostCategoriesModule],
})
export class PostsTypeModule {}
