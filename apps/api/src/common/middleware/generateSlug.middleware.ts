import { Logger } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaLib } from 'libs/prisma/lib';

export function GenerateSlugMiddleware<
  T extends Prisma.BatchPayload = Prisma.BatchPayload,
>(): Prisma.Middleware {
  const prismaLib = new PrismaLib();
  const logger = new Logger(GenerateSlugMiddleware.name);

  return async (
    params: Prisma.MiddlewareParams,
    next: (params: Prisma.MiddlewareParams) => Promise<T>,
  ): Promise<T> => {
    // if a new piece of content is created lets generate the slug for it
    if (params.action === 'create') {
      switch (params.model) {
        case Prisma.ModelName.Gallery:
        case Prisma.ModelName.Manufacturer:
        case Prisma.ModelName.Model:
        case Prisma.ModelName.Post:
        case Prisma.ModelName.PostCategory:
        case Prisma.ModelName.PostTag:
        case Prisma.ModelName.Page:
        case Prisma.ModelName.Scale:
        case Prisma.ModelName.ModelTags: {
          const slug = await prismaLib.generateSlug(
            params.args.data.title,
            params.model.toLowerCase(),
          );

          params.args.data.slug = slug;
          break;
        }

        default: {
          logger.log(`Unknown model type: ${params.model}`);
        }
      }
    }
    const result = await next(params);

    // logic goes here
    return result;
  };
}
