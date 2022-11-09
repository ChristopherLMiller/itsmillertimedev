import { TransformPipe } from '@discord-nestjs/common';
import { Command, DiscordCommand, UsePipes } from '@discord-nestjs/core';
import { Injectable } from '@nestjs/common';
import { ContextMenuCommandInteraction } from 'discord.js';
import { WeatherService } from '../../../weather/weather.service';
import { DiscordService } from '../../discord.service';

@Injectable()
@Command({
  name: 'alerts',
  description: 'Active Weather Alerts',
})
@UsePipes(TransformPipe)
export class WeatherAlertsCommand implements DiscordCommand {
  constructor(
    private discord: DiscordService,
    private weatherService: WeatherService
  ) {}

  async handler(interaction: ContextMenuCommandInteraction): Promise<string> {
    // we need to see if the user is setup in the DB first
    const userSettings = await this.discord.getUserMeta(interaction.user.id);

    // If the user settings aren't found, then just let the user know this
    if (!userSettings) {
      return 'You need to setup your weather zone to be able to use this command';
    }

    const data = await this.weatherService.getAlerts({
      lat: userSettings.meta['lat'],
      lon: userSettings.meta['lon'],
    });

    // extract out the alerts
    const alerts = data.data.features;

    if (alerts.length < 1) {
      interaction.reply({
        content: 'No active weather alerts found',
        ephemeral: true,
      });
    }

    interaction.channel.send(`Active Alerts: ${alerts.length}`);
    alerts.forEach((alert) => {
      const { event, headline, description } = alert.properties;
      interaction.channel.send({
        content: `${event}\nWhen: ${headline}\nDescription: ${description}`,
      });
    });
  }
}
