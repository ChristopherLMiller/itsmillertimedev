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
import { DataResponse } from '../../../../../src/lib/response';
import { AuthService } from '../../../common/auth/auth.service';
import { PrismaService } from '../../../common/prisma/prisma.service';

@Injectable({ scope: Scope.REQUEST })
export class PostService {
  constructor(
    @Inject(REQUEST) private readonly request: ExpressRequest,
    private prisma: PrismaService,
    private authService: AuthService,
  ) {}
  private readonly _logger = new Logger(PostService.name);

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
        this._logger.log(error.message);
        throw new BadRequestException(
          'Unable to validate the post',
          error.message,
        );
      } else {
        throw new Error(error);
      }
    }
  }

  async findAll(
    query?: Prisma.PostFindManyArgs,
  ): DataResponse<Partial<Post[]>> {
    // Immediately verify that both select and include aren't included, if they
    // are then error and exit immediately
    if (query.select && query.include) {
      throw new BadRequestException(
        `Cannot query using both select and include fields, use one or the other`,
      );
    }
    // Extract out the query parameters and set some default values
    const orderBy = JSON.parse(
      (query.orderBy as string) || '{"createdAt":"asc"}',
    );
    const skip = +query.skip || 0;
    const take = +query.take || undefined;
    const whereQuery = query.where || undefined;
    const selectQuery = query.select || undefined;
    const includeQuery = query.include || undefined;

    interface whereInterface {
      published?: boolean;
      [key: string]: unknown;
    }

    // Create some variables to store data in
    let data;
    const where: whereInterface = {
      published: true,
    };

    // Extract the user if provided, as this is used to determine some filtering parameters
    const isLoggedIn = await this.authService.isLoggedIn(
      this.request.headers.authorization,
    );

    // Check that the user is logged in, showing draft pieces requires authentication
    if (isLoggedIn) {
      const user = await this.authService.getUser(
        this.authService.getJWT(this.request.headers.authorization),
      );

      // If user isn't null we can fetch their role
      if (user != null) {
        const userRole = await this.authService.getUserRole(user.data.user.id);
        // Determine the level of publishedStatus based on the user role
        if (userRole.name.toUpperCase() === 'ADMINISTRATOR') {
          where.published = undefined; // this won't filter out anything
        }
      }
    }

    // Add in where query parameters to the existing where object
    if (whereQuery !== undefined) {
      const parsed = JSON.parse(whereQuery as string);
      Object.assign(where, parsed);
    }

    // Query differs  depending on if its got a select or include, or neither
    try {
      if (selectQuery !== undefined) {
        // Only select the fields asked for by the user
        const select = {};

        // Split apart the select fields if provided
        if (selectQuery !== null) {
          const selectKeys = (selectQuery as string).split(',');
          const selectObjet = {};
          for (let i = 0; i < selectKeys.length; i++) {
            selectObjet[selectKeys[i]] = true;
          }
          Object.assign(select, selectObjet);
        }

        data = await this.prisma.post.findMany({
          where,
          select,
          orderBy,
          take,
          skip,
        });
      } else if (includeQuery !== undefined) {
        // We are including fileds provided, aka relationships
        const include = {};

        // Extrapolate the include parameters
        if (includeQuery !== undefined && includeQuery !== null) {
          const parsed = JSON.parse(includeQuery as string);
          Object.assign(include, parsed);
        }
        data = await this.prisma.post.findMany({
          where,
          include,
          orderBy,
          take,
          skip,
        });
      } else {
        // No select or include, so we just query with the params provided
        data = await this.prisma.post.findMany({
          where,
          orderBy,
          take,
          skip,
        });
      }
    } catch (error) {
      this._logger.error(error);
      throw new BadRequestException(error.message, error);
    }

    // Get the total count to pass back as meta
    const totalRecords = await this.prisma.post.count({
      where,
    });

    // Lets return some data now
    return {
      data,
      meta: { total: totalRecords, take, skip },
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
}
