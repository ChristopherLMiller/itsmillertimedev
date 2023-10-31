import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SettingsModule } from '../../common/settings/settings.module';
import { SettingsService } from '../../common/settings/settings.service';
import { DiscordModule } from '../discord/discord.module';
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
          'X-Api-Key': await settings.getFieldValue('clockify', 'api_key'),
        },
      }),
    }),
    SettingsModule,
    DiscordModule,
  ],
  providers: [ClockifyService],
  exports: [ClockifyService],
})
export class ClockifyModule {}
