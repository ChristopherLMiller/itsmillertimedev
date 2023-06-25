import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaModule } from '../../../common/prisma/prisma.module';
import { SettingsModule } from '../../settings/settings.module';
import { DiscordService } from '../discord/discord.service';
import { LastFMController } from './lastfm.controller';
import { LastFMService } from './lastfm.service';

@Module({
  controllers: [LastFMController],
  imports: [
    HttpModule.register({
      baseURL: 'https://ws.audioscrobbler.com/2.0/',
      headers: {
        'User-Agent': 'ItsMillerTime',
      },
    }),
    PrismaModule,
    SettingsModule,
  ],
  providers: [DiscordService, LastFMService],
})
export class LastFMModule {}
