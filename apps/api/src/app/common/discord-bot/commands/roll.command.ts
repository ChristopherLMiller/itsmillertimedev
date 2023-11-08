import { SlashCommandPipe } from '@discord-nestjs/common';
import { Command, EventParams, Handler, IA, Param } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { Transform } from 'class-transformer';
import { ClientEvents, InteractionReplyOptions } from 'discord.js';

export class RollDto {
  @Transform(({ value }) => value.toLowerCase())
  @Param({
    name: 'dice',
    description:
      'Dice to roll (ex: 4d6,2d8); Can be singular or comma separated list of dice',
    required: true,
  })
  dice: string;
  @Param({
    name: 'hidden',
    description: 'Hide the dice roll from others on the server',
  })
  hidden: boolean;
}

@Injectable()
@Command({
  name: 'roll',
  description: 'Roll specified amount of dice',
})
export class RollCommand {
  @Handler()
  async onRollCommand(
    @IA(SlashCommandPipe) dto: RollDto,
    @EventParams() interaction: ClientEvents['interactionCreate']
  ): Promise<InteractionReplyOptions> {
    const { dice, hidden } = dto;
    const event = interaction[0];
    const username = event?.member?.user?.username;

    // Split and form an array of dice, can be singular or multiple
    const diceArray = dice.includes(',') ? dice.split(',') : [dice];

    // loop and roll the dice
    diceArray.forEach(async (die) => {
      // verify that the die is of the correct format
      if (die.toLowerCase().includes('d')) {
        const [count, sides] = die.toLowerCase().split('d');

        // lets roll the die now
        const dieRolls = [];

        for (let index = 1; index <= parseInt(count); index++) {
          const result = Math.floor(Math.random() * parseInt(sides)) + 1;
          dieRolls[index - 1] = result;
        }

        // Return the die rolls
        return {
          content: `Roll for ${die}: ${dieRolls.join(', ')}`,
          ephemeral: hidden,
        };
      } else {
        // invalid dice, warn user
        return {
          content: `The roll of ${die} was invalid, format is (x)d(y), where (x) is the number of die and (y) is how many sides it has`,
          ephemeral: hidden,
        };
      }
    });

    return {
      content: `${username} has rolled some dice`,
    };
  }
}
