import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../../../prisma/prisma.service';
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
  ],
  providers: [DiscordService, ConfigService, LastFMService, PrismaService],
})
export class LastFMModule {}
