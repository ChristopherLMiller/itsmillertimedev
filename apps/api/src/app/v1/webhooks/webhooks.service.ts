import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom, map } from 'rxjs';

@Injectable()
export class WebhooksService {
  constructor(private httpService: HttpService) {}

  async sendDiscordMessage(message: string) {
    try {
      const result = this.httpService
        .post(
          process.env.DISCORDBOT_WEBHOOK_URL,
          JSON.stringify({
            username: 'Miller Time API',
            avatar_url: '',
            content: message,
          }),
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        .pipe(map((response) => response.data));

      console.info(await firstValueFrom(result));
    } catch (error) {
      console.error(error.message);
    }
  }
}
