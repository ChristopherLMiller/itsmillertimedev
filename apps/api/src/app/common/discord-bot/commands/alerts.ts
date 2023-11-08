import { Command, EventParams, Handler } from '@discord-nestjs/core';
import { Injectable, Logger } from '@nestjs/common';
import { ClientEvents, EmbedBuilder } from 'discord.js';
import { DiscordService } from '../../../v1/discord/discord.service';
import { WeatherService } from '../../../v1/weather/weather.service';

@Injectable()
@Command({
  name: 'alerts',
  description: 'Active Weather Alerts',
})
export class WeatherAlertsCommand {
  constructor(
    private discord: DiscordService,
    private weatherService: WeatherService,
  ) {}

  private readonly _logger = new Logger(WeatherAlertsCommand.name);

  @Handler()
  async onAlertsCommand(
    @EventParams() interaction: ClientEvents['interactionCreate'],
  ): Promise<unknown> {
    // extract out the event
    const event = interaction[0];
    // we need to see if the user is setup in the DB first
    const userSettings = await this.discord.getUserMeta(event.member.user.id);

    // If the user settings aren't found, then just let the user know this
    if (!userSettings.meta['location']) {
      return {
        content:
          'You need to setup your weather zone to be able to use this command',
        ephemeral: true,
      };
    }

    const { gps } = JSON.parse(userSettings.meta['location']);
    const data = await this.weatherService.getAlerts({
      lat: gps.lat,
      lon: gps.lng,
    });

    // extract out the alerts
    const alerts = data.data.alerts;
    this._logger.log(alerts);

    if (!alerts || alerts.length < 1) {
      return {
        content: 'No active weather alerts found',
        ephemeral: true,
      };
    }

    // array of embeds to return
    const embeds = [];

    alerts.forEach((alert) => {
      const { event, sender_name, description } = alert;
      const embed = new EmbedBuilder()
        .setTitle(`${event} - ${sender_name}`)
        .addFields({
          name: 'Description',
          value: description,
        });

      embeds.push(embed);
    });

    return {
      embeds: embeds,
      ephemeral: true,
    };
  }
}
