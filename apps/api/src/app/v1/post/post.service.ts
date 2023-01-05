import { BadRequestException, Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaDTO } from 'apps/api/src/prisma/prisma.dto';
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

  async findAll(query: PrismaDTO) {
    const {
      sort = 'createdAt:ASC',
      skip,
      take,
      where,
      limit,
      start,
      published,
    } = query;

    // set up the where clause
    let whereObject = undefined;
    if (where !== undefined) {
      whereObject = JSON.parse(where);
    }

    // Extrapolate out the published field for the where clause
    let publishedStatus;
    if (published) {
      if (published.toLowerCase() === 'all') {
        publishedStatus = null; // this won't filter out anything
      } else if (published.toLowerCase() === 'live') {
        publishedStatus = { published: true }; // this tells prisma to filter out anything with published field of false
      } else if (published.toLowerCase() === 'preview') {
        publishedStatus = { published: false };
      }
    } else {
      publishedStatus = { published: true };
    }

    // recast orderBy as a string
    const orderBy = {};
    orderBy[sort.slice(0, sort.indexOf(':'))] = sort
      .slice(sort.indexOf(':') + 1)
      .toLowerCase();

    const data = await this.prisma.post.findMany({
      include: {
        category: true,
        tags: true,
        featuredImage: true,
      },
      orderBy: orderBy,
      skip: parseInt(skip?.toString()) || parseInt(start?.toString()) || 0,
      take: parseInt(take?.toString()) || parseInt(limit?.toString()) || 10,
      where: { ...whereObject, ...publishedStatus },
    });
    const total = await this.getCount(where);
    return {
      data,
      meta: { total },
    };
  }

  findOne(slug: string) {
    return this.prisma.post.findUnique({
      include: { category: true, tags: true, featuredImage: true },
      where: {
        slug,
      },
    });
  }

  async getCount(where: string): Promise<number> {
    return this.prisma.post.count({
      where: where !== undefined ? JSON.parse(where) : undefined,
    });
  }

  update(id: number, updatePostDto: Post) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
