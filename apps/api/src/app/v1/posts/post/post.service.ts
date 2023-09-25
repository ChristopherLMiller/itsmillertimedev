import { Response } from '@itsmillertimedev/data';
import { countWords } from '@itsmillertimedev/utility-functions';
import {
  BadRequestException,
  Inject,
  Injectable,
  Logger,
  Scope,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Post, Prisma } from '@prisma/client';
import { Request as ExpressRequest } from 'express';
import { PrismaService } from '../../../../common/prisma/prisma.service';
import { AuthService } from '../../../auth/auth.service';

@Injectable({ scope: Scope.REQUEST })
export class PostService {
  constructor(
    @Inject(REQUEST) private readonly request: ExpressRequest,
    private prisma: PrismaService,
    private authService: AuthService
  ) {}
  private logger = new Logger(PostService.name);

  async create(newData: Prisma.PostCreateInput): Promise<Post> {
    try {
      const metaTitle = newData.metaTitle || newData.title;
      const wordCount = newData.content && countWords(newData.content);
      const data = await this.prisma.post.create({
        data: { ...newData, metaTitle, wordCount },
      });
      return data;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientValidationError) {
        this.logger.log(error.message);
        throw new BadRequestException(
          'Unable to validate the post',
          error.message
        );
      } else {
        throw new Error(error);
      }
    }
  }

  async findAll(query: Prisma.PostFindManyArgs): Response<Partial<Post[]>> {
    const { orderBy, skip, take, where, select } = query;

    const authToken = this.request.headers.authorization;
    const loggedIn = await this.authService.isLoggedIn(authToken);
    console.log(authToken, loggedIn);

    // set up the where clause
    let whereObject = undefined;
    if (where !== undefined) {
      whereObject = JSON.parse(where as string);
    }

    // Extrapolate out the published field for the where clause, defaults to published true
    let publishedStatus = { published: true };

    // Check that the user is logged in

    if (loggedIn) {
      const user = await this.authService.getUser(
        this.authService.getJWT(authToken)
      );

      // If user isn't null we can fetch their role
      if (user != null) {
        const userRole = await this.authService.getUserRole(user.data.user.id);

        console.log(`user is logged in, and their role is ${userRole}`);

        // Determine the level of publishedStatus based on the user role
        if (userRole.name.toUpperCase() === 'ADMINISTRATOR') {
          publishedStatus = { published: undefined }; // this won't filter out anything
        }
      }
    }

    console.log(publishedStatus);

    // Create some variables to store data in
    let data;

    // @ts-ignore
    const order = JSON.parse(orderBy);

    if (select !== null && select !== undefined) {
      const selectKeys = (select as string).split(',');
      const selectObject = {};
      for (let i = 0; i < selectKeys.length; i++) {
        selectObject[selectKeys[i]] = true;
      }

      data = await this.prisma.post.findMany({
        select: selectObject,
        orderBy: [{ ...order }],
        skip: parseInt(skip?.toString()) || parseInt(skip?.toString()) || 0,
        take: parseInt(take?.toString()) || parseInt(take?.toString()) || 10,
        where: { ...whereObject, ...publishedStatus },
      });
    } else {
      data = await this.prisma.post.findMany({
        include: {
          tags: true,
          category: true,
          featuredImage: true,
        },
        orderBy: [{ ...order }],
        skip: parseInt(skip?.toString()) || parseInt(skip?.toString()) || 0,
        take: parseInt(take?.toString()) || parseInt(take?.toString()) || 10,
        where: { ...whereObject, ...publishedStatus },
      });
    }

    // Get the total count to pass back as meta
    const total = await this.prisma.post.count({
      where: { ...whereObject, ...publishedStatus },
    });

    // Lets return some data now
    return {
      data,
      meta: { total },
    };
  }

  findOne(slug: string): Promise<Post> {
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
