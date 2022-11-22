import { Injectable } from '@nestjs/common';
import { PostTag, Prisma } from '@prisma/client';
import { PrismaLib } from 'libs/prisma/lib';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class PostTagService {
  constructor(private prisma: PrismaService) {}

  prismaLib = new PrismaLib();

  async create(
    newData: PostTag | PostTag[]
  ): Promise<PostTag | Prisma.BatchPayload> {
    // check if a singular item or an array
    if (Array.isArray(newData)) {
      console.log('array items');
      // handle as an array
      const insertableItems = await Promise.all(
        newData.flatMap(async (item) => {
          const slug = await this.prismaLib.generateSlug(
            item.slug ? item.slug : item.title,
            'postTag'
          );

          return {
            title: item.title,
            slug,
          };
        })
      );

      return this.prisma.postTag.createMany({
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
            'postTag'
          );

          result = await this.prisma.postTag.create({
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
