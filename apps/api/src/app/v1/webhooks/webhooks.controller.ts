import { ClockifyResponse, Response } from '@itsmillertimedev/data';
import {
  BadRequestException,
  Body,
  Controller,
  ForbiddenException,
  Headers,
  Logger,
  Post,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ClockifyTimer } from '@prisma/client';
import { formatDistanceStrict, parseISO } from 'date-fns';
import { SettingsService } from '../../settings/settings.service';
import { ClockifyService } from '../clockify/clockify.service';
import { DiscordService } from '../discord/discord.service';
import { DiscordChannels } from '../discord/discord.types';
import { ImageService } from '../image/image.service';

@Controller({ version: '1', path: 'webhooks' })
@ApiTags('webhooks')
export class WebhooksController {
  constructor(
    private clockify: ClockifyService,
    private discord: DiscordService,
    private image: ImageService,
    private readonly settings: SettingsService
  ) {}

  logger = new Logger(WebhooksController.name);

  //#region Clockify
  @Post('clockify/start')
  @ApiSecurity('clockify-signature')
  async webhookClockifyStart(
    @Headers('clockify-signature') clockifySignature: string,
    @Body() body: ClockifyResponse
  ): Promise<ClockifyTimer> {
    const startSignature = await this.settings.getField(
      'clockify',
      'start_signature'
    );
    // if the signatures don't match we need to eject with a 403 error
    if (clockifySignature != startSignature) {
      this.logger.error('Invalid Clockify Webhook Signature provided');
      throw new ForbiddenException(
        'Invalid Clockify Webhook Signature provided'
      );
    }

    const { project, timeInterval } = body;

    // if there isn't a projectID eject now
    if (project?.id == null) {
      this.logger.error('Must provide projectID');
      throw new BadRequestException('Must provide projectId');
    }
    // send a message to discord
    this.discord.sendMessage(
      `Clockify timer started - ${project.name}`,
      DiscordChannels.DISCORD_BOT_SPAM_CHANNEL
    );

    // return the started timer
    return this.clockify.addClockifyTimer(project.id, timeInterval.start);
  }

  @Post('clockify/stop')
  async webhookClockifyStop(
    @Headers('clockify-signature') clockifySignature: string,
    @Body() body: ClockifyResponse
  ): Promise<ClockifyTimer> {
    const stopSignature = await this.settings.getField(
      'clockify',
      'stop_signature'
    );
    // if the signatures don't match we need to eject with a 403 error
    if (clockifySignature != stopSignature) {
      this.logger.error('Invalid Clockify Webhook Signature provided');
      throw new ForbiddenException(
        'Invalid Clockify Webhook Signature provided'
      );
    }
    const { project, timeInterval } = body;

    // if the projectId is null we just will ignore this
    if (project?.id == null) {
      this.logger.error('Must provide projectID');
      throw new BadRequestException('Must provide projectId');
    }

    // convert the timeInterval to a number
    const timeElapsed = formatDistanceStrict(
      parseISO(timeInterval.end),
      parseISO(timeInterval.start)
    );

    // Send a message to discord
    this.discord.sendMessage(
      `Clockify timer stopped - ${project.name}; Elapsed Time: ${timeElapsed}`,
      DiscordChannels.DISCORD_BOT_SPAM_CHANNEL
    );
    return this.clockify.removeClockifyTimer(project.id);
  }

  @Post('clockify/delete')
  async webhookClockifyDelete(
    @Headers('clockify-signature') clockifySignature: string,
    @Body() body: ClockifyResponse
  ): Promise<ClockifyTimer> {
    const stopSignature = await this.settings.getField(
      'clockify',
      'stop_signature'
    );
    // if the signatures don't match we need to eject with a 403 error
    if (clockifySignature != stopSignature) {
      this.logger.error('Invalid Clockify Webhook Signature provided');
      throw new ForbiddenException(
        'Invalid Clockify Webhook Signature provided'
      );
    }
    const { project } = body;

    // if the projectId is null we just will ignore this
    if (project?.id == null) {
      this.logger.error('Must provide projectID');
      throw new BadRequestException('Must provide projectId');
    }

    // Send a message to discord
    this.discord.sendMessage(
      `Clockify timer deleted - ${project.name}`,
      DiscordChannels.DISCORD_BOT_SPAM_CHANNEL
    );
    return this.clockify.removeClockifyTimer(project.id);
  }
  //#endregion

  //#region Cloudinary
  @Post('cloudinary/notify')
  async webhookCloudinaryNotify(@Body() body: any): Response<unknown> {
    // the type of notication means we need to call different services, handle appropriately
    switch (body.notification_type) {
      case 'upload': {
        // Resource was uploaded
        if (await this.image.createImage(body)) {
          this.discord.sendMessage(
            `Created new Cloudinary resource, public_id: ${body.public_id}`,
            DiscordChannels.DISCORD_BOT_SPAM_CHANNEL
          );
          return {
            data: {
              message: 'Image created successfully',
            },
            meta: {
              public_id: body.public_id,
            },
          };
        }
        break;
      }
      case 'delete': {
        // Resource was deleted
        if (await this.image.deleteImage(body.resources.public_id)) {
          this.discord.sendMessage(
            `Deleted Cloudinary resource, public_id: ${body.resources.public_id}`,
            DiscordChannels.DISCORD_BOT_SPAM_CHANNEL
          );
          return {
            data: {
              message: 'Resource was successfully deleted',
            },
            meta: {
              public_id: body.resources.public_id,
            },
          };
        }
        break;
      }
      case 'resource_context_changed':
        // Resource meta was updated
        // Todo
        if (await this.image.updateMetadata('public_id')) {
          this.discord.sendMessage(
            `Updated Cloudinary resource, public_id: ${body.resources.public_id}`,
            DiscordChannels.DISCORD_BOT_SPAM_CHANNEL
          );
          return {
            data: {
              message: 'Resource meta updated successfully',
            },
            meta: {
              public_id: 'public_id',
            },
          };
        }
        break;
      default:
        this.logger.log(body.notification_type);
        break;
    }
  }
  //#endregion
}
