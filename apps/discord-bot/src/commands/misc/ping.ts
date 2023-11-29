import { CommandInteraction } from 'discord.js';
import { Discord, Slash } from 'discordx';

@Discord()
export class PingCommand {
  @Slash({ description: 'Replies with a pong!', name: 'ping' })
  ping(interaction: CommandInteraction): void {
    interaction.reply('pong');
  }
}
