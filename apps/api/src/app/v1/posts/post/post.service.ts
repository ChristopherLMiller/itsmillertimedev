import { DataResponse } from '@itsmillertimedev/data';
import { countWords } from '@itsmillertimedev/utility-functions';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Post, Prisma } from '@prisma/client';
import { PrismaDTO } from '../../../../common/prisma/prisma.dto';
import { PrismaService } from '../../../../common/prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(newData: Post): Promise<Post> {
    const metaTitle = newData.metaTitle || newData.title;
    const wordCount = countWords(newData.content);
    try {
      const data = await this.prisma.post.create({
        data: { ...newData, metaTitle, wordCount },
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

  async findAll(query: PrismaDTO): Promise<DataResponse<Partial<Post[]>>> {
    const {
      sort = 'createdAt:ASC',
      skip,
      take,
      where,
      limit,
      start,
      published,
      select,
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

    // Create some variables to store data in
    let data;

    if (select !== null && select !== undefined) {
      const selectKeys = select.split(',');
      const selectObject = {};
      for (let i = 0; i < selectKeys.length; i++) {
        selectObject[selectKeys[i]] = true;
      }

      data = await this.prisma.post.findMany({
        select: selectObject,
        orderBy: orderBy,
        skip: parseInt(skip?.toString()) || parseInt(start?.toString()) || 0,
        take: parseInt(take?.toString()) || parseInt(limit?.toString()) || 10,
        where: { ...whereObject, ...publishedStatus },
      });
    } else {
      data = await this.prisma.post.findMany({
        include: {
          tags: true,
          category: true,
          featuredImage: true,
        },
        orderBy: orderBy,
        skip: parseInt(skip?.toString()) || parseInt(start?.toString()) || 0,
        take: parseInt(take?.toString()) || parseInt(limit?.toString()) || 10,
        where: { ...whereObject, ...publishedStatus },
      });
    }

    // Get the total count to pass back as meta
    const total = await this.getCount(where);

    // Lets return some data now
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
