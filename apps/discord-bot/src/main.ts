import { dirname, importx } from '@discordx/importer';
import { DataResponse } from '@itsmillertimedev/data';
import { Events, GatewayIntentBits } from 'discord.js';
import { Client } from 'discordx';
import { backendAPI } from './lib/fetcher.js';
export class Main {
  private static _client: Client;

  static get Client(): Client {
    return this._client;
  }

  static async start(): Promise<void> {
    this._client = new Client({
      intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildMessages,
      ],
      silent: false,
    });

    this._client.once(Events.ClientReady, async () => {
      this._client.initApplicationCommands();

      console.log(`${this._client.user.username} bot has started`);
    });

    this._client.on(Events.InteractionCreate, (interaction) => {
      this._client.executeInteraction(interaction);
    });

    await importx(`${dirname(import.meta.url)}/{commands,events}/**/*.{js,ts}`);

    try {
      /*const response = await fetch(
        `http://localhost:3000/api/settings/setting?key=discord&field=bot-token`,
        { headers: { 'x-api-key': process.env.API_KEY } },
      );*/
      const { data } = await backendAPI.get<DataResponse<string>>(
        '/settings/setting?key=discord&field=bot-token',
      );

      //extract out the bot token
      await this._client.login(data);
    } catch (error) {
      throw new Error('Unable to load the bots token');
    }
  }
}

Main.start();
