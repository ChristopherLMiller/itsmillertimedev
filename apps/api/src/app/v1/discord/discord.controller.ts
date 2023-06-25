import { DataResponse } from '@itsmillertimedev/data';
import { Body, Controller, Post } from '@nestjs/common';
import { DiscordService } from './discord.service';

@Controller({ version: '1', path: 'discord' })
export class DiscordController {
  constructor(private discord: DiscordService) {}

  @Post('message')
  async sendMessage(@Body() body: any): Promise<DataResponse<unknown>> {
    const { message, channel } = body;
    return await this.discord.sendMessage(message, channel);
  }
}
