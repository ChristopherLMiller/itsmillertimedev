import { Injectable, Logger } from '@nestjs/common';
import { Settings } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';

@Injectable()
export class SettingsService {
  logger = new Logger(SettingsService.name);

  constructor(private prisma: PrismaService) {}

  async getSetting(key: string): Promise<Settings['value']> {
    const data = await this.prisma.settings.findUnique({ where: { key } });

    return data.value;
  }

  async getField(key: string, field): Promise<string> {
    const data = await this.getSetting(key);
    return data[field];
  }
}
