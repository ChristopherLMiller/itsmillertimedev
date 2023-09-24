import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SettingsService } from '../../settings/settings.service';
import { ClockifyController } from './clockify.controller';
import { ClockifyService } from './clockify.service';

@Module({
  controllers: [ClockifyController],
  imports: [
    HttpModule.registerAsync({
      imports: [],
      inject: [SettingsService],
      // @ts-ignore
      useFactory: async (settings: SettingsService) => ({
        baseURL: 'https://api.clockify.me/api/v1',
        headers: {
          'X-Api-Key': await settings.getField('clockify', 'api_key'),
        },
      }),
    }),
  ],
  providers: [ClockifyService],
  exports: [ClockifyService],
})
export class ClockifyModule {}
