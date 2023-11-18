import { Events } from 'discord.js';

module.exports = {
  name: Events.MessageCreate,
  execute(interaction) {
    console.log(interaction);
  },
};
