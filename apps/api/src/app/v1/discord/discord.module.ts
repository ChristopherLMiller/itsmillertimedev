import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DiscordController } from './discord.controller';
import { DiscordService } from './discord.service';

@Module({
  controllers: [DiscordController],
  imports: [HttpModule],
  providers: [DiscordService],
})
export class DiscordModule {}
