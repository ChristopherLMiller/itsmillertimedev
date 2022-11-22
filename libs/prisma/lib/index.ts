import { PrismaClient } from '@prisma/client';
import slugify from 'slugify';

export class PrismaLib extends PrismaClient {
  private prisma = new PrismaClient();

  generateSlug = async (
    title: string,
    prismaModel: string,
    max = 10
  ): Promise<string> => {
    let result = null;
    let counter = 0;
    let slug = '';

    // Loop till condition is met, executes at least once
    do {
      slug = slugify(`${title}${counter ? '-' + counter : ''}`, {
        lower: true,
        strict: true,
      });

      result = await this.prisma[prismaModel].findUnique({
        where: { slug },
      });

      // if the data is not null that means there was an existing record
      if (result !== null) {
        counter++;
      }

      if (result === null) {
        return slug;
      }
    } while (result !== null && counter < max);

    return slug;
  };
}
