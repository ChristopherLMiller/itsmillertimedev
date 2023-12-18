import { Injectable } from "@nestjs/common";
import { PostCategory } from "@prisma/client";
import { PostCategory as PostCategoryEntity } from "../../../../lib/prisma/classes/post_category";
import { PrismaService } from "../../../common/prisma/prisma.service";

@Injectable()
export class PostCategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(postCategories: PostCategoryEntity): Promise<PostCategory> {
    return await this.prisma.create("postCategory", postCategories);
  }

  findAll(): Promise<PostCategory[]> {
    return this.prisma.postCategory.findMany();
  }

  findOne(slug: string) {
    return this.prisma.postCategory.findUnique({ where: { slug } });
  }

  update(
    slug: string,
    updatePostCategory: PostCategory,
  ): Promise<PostCategory> {
    return this.prisma.postCategory.update({
      where: { slug: slug },
      data: { ...updatePostCategory },
    });
  }

  remove(slug: string) {
    return this.prisma.postCategory.delete({ where: { slug } });
  }
}
