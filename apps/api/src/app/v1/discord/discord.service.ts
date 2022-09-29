import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { handleAxiosError } from '../../handleAxiosError';
import { DiscordChannels } from './discord.types';

@Injectable()
export class DiscordService {
  constructor(private httpService: HttpService) {}

  async sendMessage(message: string, channel: DiscordChannels) {
    const response = this.httpService
      .post(
        process.env[channel],
        JSON.stringify({
          username: 'ItsMillerTime',
          avatar_url:
            'https://images.itsmillertime.dev/v1664470345/clm-new/assets/discord-avatar.png',
          content: message,
          channel_id: '',
        }),
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .pipe(catchError(handleAxiosError));

    const { data } = await firstValueFrom(response);
    return data;
  }
}
