import { BadRequestException, Injectable, Logger } from "@nestjs/common";
import { PostTag } from "@prisma/client";
import { PrismaLib } from "libs/prisma/lib";
import { PrismaService } from "../../../common/prisma/prisma.service";

@Injectable()
export class PostTagsService {
  constructor(private prisma: PrismaService) {}

  prismaLib = new PrismaLib();
  private readonly _logger = new Logger(PostTagsService.name);

  async create(tag: PostTag): Promise<PostTag> {
    if (Array.isArray(tag))
      throw new BadRequestException("Can only create one tag at a time");

    const title = tag.title;
    const slug = tag.slug ?? null; // Slug generation is handled by the middleware
    const result = await this.prisma.create<PostTag>("postTag", {
      title,
      slug,
    });
    return result;
  }

  findAll(): Promise<PostTag[]> {
    return this.prisma.postTag.findMany();
  }

  findOne(slug: string) {
    return this.prisma.postTag.findUnique({
      where: { slug },
    });
  }

  update(slug: string, updatePostTag: PostTag): Promise<PostTag> {
    return this.prisma.postTag.update({
      where: { slug: slug },
      data: { ...updatePostTag },
    });
  }

  remove(slug: string) {
    return this.prisma.postTag.delete({ where: { slug } });
  }
}
