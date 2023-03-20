import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaModule } from '../../../common/prisma/prisma.module';
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
  ],
  providers: [DiscordService, ConfigService, LastFMService],
})
export class LastFMModule {}
