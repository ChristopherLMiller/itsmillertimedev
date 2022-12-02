import { Injectable } from '@nestjs/common';
import { PostCategory, Prisma } from '@prisma/client';
import { PrismaLib } from 'libs/prisma/lib';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PostCategoryService {
  constructor(private prisma: PrismaService) {}

  prismaLib = new PrismaLib();

  async create(
    newData: PostCategory | PostCategory[]
  ): Promise<PostCategory | Prisma.BatchPayload> {
    // check if a singular item or an array
    if (Array.isArray(newData)) {
      // handle as an array
      const insertableItems = await Promise.all(
        newData.flatMap(async (item) => {
          const slug = await this.prismaLib.generateSlug(
            item.slug ? item.slug : item.title,
            'postCategory'
          );

          return { ...item, slug };
        })
      );

      return this.prisma.postCategory.createMany({
        data: insertableItems,
      });
    } else {
      // we use this variable to keep track of the db insertion being successful or not
      let result = null;
      let counter = 0;
      do {
        try {
          // Handle singular item
          const title = newData.title;
          const slug = await this.prismaLib.generateSlug(
            newData.slug ? newData.slug : newData.title,
            'postCategory'
          );

          result = await this.prisma.postCategory.create({
            data: { title, slug },
          });
        } catch (error) {
          if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
              // Error code is from prisma docs https://www.prisma.io/docs/reference/api-reference/error-reference
              // Unique constraint fail, increment the counter
              counter++;
            }
          } else {
            // Idk what else could fail it, just throw the error
            throw error;
          }
        }
      } while (!result && counter < 10); // loop while result is null and counter is less than 10
      return result;
    }
    return null;
  }

  findAll(): Promise<PostCategory[]> {
    return this.prisma.postCategory.findMany();
  }

  findOne(slug: string) {
    return this.prisma.postCategory.findUnique({ where: { slug } });
  }

  update(
    slug: string,
    updatePostCategory: PostCategory
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
