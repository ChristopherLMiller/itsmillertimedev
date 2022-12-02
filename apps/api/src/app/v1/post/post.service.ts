import { BadRequestException, Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaLib } from 'libs/prisma/lib';
import { PrismaService } from '.././../../prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  prismaLib = new PrismaLib();

  async create(newData: Post): Promise<Post> {
    const slug = await this.prismaLib.generateSlug(
      newData.slug || newData.title,
      'post'
    );
    const metaTitle = newData.metaTitle || newData.title;
    try {
      const data = await this.prisma.post.create({
        data: { ...newData, slug, metaTitle },
      });
      return data;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        console.log(error.message);
        throw new BadRequestException(
          'Unable to validate the post',
          error.message
        );
      }
    }
  }

  findAll() {
    return this.prisma.post.findMany({
      include: { category: true, tags: true, featuredImage: true },
      orderBy: { publishedAt: 'desc' },
    });
  }

  findOne(slug: string) {
    return this.prisma.post.findUnique({
      include: { category: true, tags: true, featuredImage: true },
      where: {
        slug,
      },
    });
  }

  update(id: number, updatePostDto: Post) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
