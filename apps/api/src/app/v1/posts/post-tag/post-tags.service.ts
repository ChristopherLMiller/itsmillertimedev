import { Injectable, Logger } from "@nestjs/common";
import { PostTag } from "@prisma/client";
import { PostTag as PostTagEntity } from "../../../../lib/prisma/classes/post_tag";
import { PrismaService } from "../../../common/prisma/prisma.service";

@Injectable()
export class PostTagsService {
  constructor(private prisma: PrismaService) {}

  private readonly _logger = new Logger(PostTagsService.name);

  create(tag: PostTagEntity): Promise<PostTag> {
    return this.prisma.create<PostTag>("postTag", tag);
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
