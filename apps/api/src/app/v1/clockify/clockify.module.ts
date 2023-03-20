import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from '../../../common/prisma/prisma.module';
import { DiscordService } from '../discord/discord.service';
import { ClockifyController } from './clockify.controller';
import { ClockifyService } from './clockify.service';

@Module({
  controllers: [ClockifyController],
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        baseURL: 'https://api.clockify.me/api/v1',
        headers: {
          'X-Api-Key': configService.get('CLOCKIFY_API_KEY'),
        },
      }),
    }),
    PrismaModule,
  ],
  providers: [ClockifyService, DiscordService, ConfigService],
  exports: [ClockifyService],
})
export class ClockifyModule {}
