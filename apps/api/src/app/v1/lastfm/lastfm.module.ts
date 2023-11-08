import { DiscordModule } from '@discord-nestjs/core';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
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
    DiscordModule,
  ],
  providers: [LastFMService],
})
export class LastFMModule {}
