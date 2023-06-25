import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaModule } from '../../../common/prisma/prisma.module';
import { SettingsModule } from '../../settings/settings.module';
import { SettingsService } from '../../settings/settings.service';
import { ClockifyController } from './clockify.controller';
import { ClockifyService } from './clockify.service';

@Module({
  controllers: [ClockifyController],
  imports: [
    HttpModule.registerAsync({
      imports: [SettingsModule],
      inject: [SettingsService],
      useFactory: async (settings: SettingsService) => ({
        baseURL: 'https://api.clockify.me/api/v1',
        headers: {
          'X-Api-Key': await settings.getField('clockify', 'api_key'),
        },
      }),
    }),
    PrismaModule,
    SettingsModule,
  ],
  providers: [ClockifyService],
  exports: [ClockifyService],
})
export class ClockifyModule {}
