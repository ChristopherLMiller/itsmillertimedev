import { Events } from 'discord.js';
import { ArgsOf, Discord, On } from 'discordx';
import { backendAPI } from '../lib/fetcher.js';

@Discord()
export class MessageCreateEvent {
  @On({ event: Events.MessageCreate })
  async onMessageCreate([message]: ArgsOf<Events.MessageCreate>) {
    const response = await backendAPI.post(`v1/discord/meta/users`, {
      userId: message.author.id,
      meta: { username: message.author.username },
    });

    console.log(response);
  }
}
