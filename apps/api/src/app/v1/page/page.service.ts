import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PageService {
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

    return {
      data,
      meta: {
        slug,
      },
    };
  }
}
