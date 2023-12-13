import { Prisma } from "@prisma/client";
import { PrismaLib } from "libs/prisma/lib";

export function GenerateSlugMiddleware<
  T extends Prisma.BatchPayload = Prisma.BatchPayload,
>(): Prisma.Middleware {
  const prismaLib = new PrismaLib();

  return async (
    params: Prisma.MiddlewareParams,
    next: (params: Prisma.MiddlewareParams) => Promise<T>,
  ): Promise<T> => {
    // if a new piece of content is created lets generate the slug for it, if we don't provide a slug either
    if (params.action === "create" || params.action === "update") {
      // Check for specific types that have slugs stored in them
      if (
        [
          Prisma.ModelName.Gallery as string,
          Prisma.ModelName.GalleryCategory as string,
          Prisma.ModelName.GalleryImage as string,
          Prisma.ModelName.GalleryTag as string,
          Prisma.ModelName.Manufacturer as string,
          Prisma.ModelName.Model as string,
          Prisma.ModelName.Post as string,
          Prisma.ModelName.PostCategory as string,
          Prisma.ModelName.PostTag as string,
          Prisma.ModelName.Page as string,
          Prisma.ModelName.Scale as string,
          Prisma.ModelName.ModelTags as string,
        ].includes(params.model) &&
        params.args.data.slug === null
      ) {
        // Lets get the model name
        const modelName = `${params.model
          .charAt(0)
          .toUpperCase()}${params.model.substring(1)}`;
        // if slug is null, then we generate it using the title, if its supplied we use that
        params.args.data.slug = await prismaLib.generateSlug(
          params.args.data.title,
          modelName, // lowercase the first letter of the model
        );
      }
    }
    return next(params);
  };
}
