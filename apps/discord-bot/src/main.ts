import { Client, Collection, GatewayIntentBits } from 'discord.js';
import fs from 'fs';
import path from 'path';
import DiscordClient from './DiscordClient';

async function bootstrap() {
  // Create the discord client
  const client = new Client({
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMembers,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildPresences,
      GatewayIntentBits.GuildMessages,
    ],
  }) as DiscordClient;

  // Collection of commands available to the bot
  console.log('Loading commands...');
  client.commands = new Collection();

  const foldersPath = path.join(__dirname, 'commands');
  const commandFolders = fs.readdirSync(foldersPath);

  // loop through the folders to get the commands available
  for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs
      .readdirSync(commandsPath)
      .filter((file) => file.endsWith('.js'));

    console.log(`.found folder ${folder}`);
    // Loop through the command files and add them to the client
    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const command = require(filePath);

      // Verify that both the data an executor exist
      if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
        console.log(`...loading ${command.data.name}`);
      } else {
        console.log(
          `Unable to load command at ${filePath} as either the "data" or "execute" property are missing `,
        );
      }
    }
  }
  console.log('Commands loaded successfully');

  // Load he events
  console.log('Loading events...');
  const eventsPath = path.join(__dirname, 'events');
  const eventFiles = fs
    .readdirSync(eventsPath)
    .filter((file) => file.endsWith('.js'));

  for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const event = require(filePath);
    console.log(`...loading event '${event.name}'`);
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args));
    } else {
      client.on(event.name, (...args) => event.execute(...args));
    }
  }
  console.log('Events loaded successfully');

  // Fetch the bot token from the backend
  const response = await fetch(
    `${process.env.API_BASE_ENDPOINT}/api/settings/setting?key=discord&field=bot-token`,
    { headers: { 'x-api-key': process.env.API_KEY } },
  );
  //extract out the bot token
  const { data: bot_token } = await await response.json();

  // Log the bot in, final step in the init process
  client.login(bot_token);
}

bootstrap();
