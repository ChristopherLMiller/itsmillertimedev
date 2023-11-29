import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class PagesService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const data = await this.prisma.page.findMany();
    const count = await this.prisma.page.count();

    return {
      data,
      meta: {
        count,
      },
    };
  }
  async findOne(slug: string) {
    const data = await this.prisma.page.findUnique({
      where: {
        slug: slug,
      },
    });

    if (data === null) {
      throw new NotFoundException(`${slug} was not found in pages`);
    }

    return {
      data,
      meta: {
        slug,
      },
    };
  }
}
