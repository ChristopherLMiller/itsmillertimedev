import { Injectable, Logger } from '@nestjs/common';
import { Settings } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SettingsService {
  private _logger = new Logger(SettingsService.name);

  constructor(private prisma: PrismaService) {}

  async getSetting(key: string): Promise<Settings['value']> {
    const data = await this.prisma.settings.findUnique({ where: { key } });

    return data.value;
  }

  // @deprecated use getField instead
  async getFieldOld<T>(key: string, field): Promise<T> {
    const data = await this.getSetting(key);
    return data[field];
  }

  async getField<T>(key: string, field: string): Promise<T> {
    return (await this.getSetting(key))['fields'][field];
  }

  async getFieldValue<T>(key: string, field: string): Promise<T> {
    return (await this.getSetting(key))['fields'][field].value;
  }
}
