import { SlashCommandBuilder } from 'discord.js';

module.exports = {
  data: new SlashCommandBuilder()
    .setName('alerts')
    .setDescription('Fetches current weather alerts'),
  async execute(interaction) {
    await interaction.reply('No weather for you!');
  },
};
