import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { DiscordService } from '../discord/discord.service';
import { ClockifyController } from './clockify.controller';
import { ClockifyService } from './clockify.service';

@Module({
  controllers: [ClockifyController],
  imports: [
    HttpModule.register({
      baseURL: 'https://api.clockify.me/api/v1',
      headers: {
        'X-Api-Key': process.env.CLOCKIFY_API_KEY,
      },
    }),
  ],
  providers: [ClockifyService, PrismaService, DiscordService],
})
export class ClockifyModule {}
