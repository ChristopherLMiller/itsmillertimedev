import { Module } from "@nestjs/common";
import { PostCategoriesController } from "./post-categories.controller";
import { PostCategoriesService } from "./post-categories.service";

@Module({
  controllers: [PostCategoriesController],
  providers: [PostCategoriesService],
  imports: [],
})
export class PostCategoriesModule {}
