import { TransformPipe } from '@discord-nestjs/common';
import {
  Command,
  DiscordTransformedCommand,
  Param,
  Payload,
  TransformedCommandExecutionContext,
  UsePipes,
} from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { Transform } from 'class-transformer';

export class RollDto {
  @Transform(({ value }) => value.toLowerCase())
  @Param({
    name: 'dice',
    description:
      'Dice to roll (ex: 4d6,2d8); Can be singular or comma separated list of dice',
    required: true,
  })
  dice: string;
}

@Injectable()
@Command({
  name: 'roll',
  description: 'Rolls some dice',
})
@UsePipes(TransformPipe)
export class RollCommand implements DiscordTransformedCommand<RollDto> {
  async handler(
    @Payload() dto: RollDto,
    { interaction }: TransformedCommandExecutionContext
  ): Promise<void> {
    const { dice } = dto;
    const username = interaction.member.user.username;

    // Lets let the channel know someone rolled some dice
    await interaction.channel.send(`${username} has rolled some dice`);

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

        // spit this out to the channel
        await interaction.channel.send(
          `Roll for ${die}: ${dieRolls.join(', ')}`
        );
      } else {
        // invalid dice, warn user
        await interaction.channel.send(
          `The roll of ${die} was invalid, format is (x)d(y), where (x) is the number of die and (y) is how many sides it has`
        );
      }
    });
  }
}
