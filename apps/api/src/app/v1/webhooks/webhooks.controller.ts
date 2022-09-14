import { ClockifyResponse } from '@itsmillertimedev/data';
import {
  BadRequestException,
  Body,
  Controller,
  ForbiddenException,
  Headers,
  Post,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ClockifyTimer } from '@prisma/client';
import { formatDistanceStrict, parseISO } from 'date-fns';
import { ClockifyService } from '../clockify/clockify.service';
import { WebhooksService } from './webhooks.service';

@Controller({ version: '1', path: 'webhooks' })
@ApiTags('webhooks')
export class WebhooksController {
  constructor(
    private clockify: ClockifyService,
    private webhooks: WebhooksService
  ) {}

  @Post('clockify/start')
  @ApiSecurity('clockify-signature')
  webhookClockifyStart(
    @Headers('clockify-signature') clockifySignature: string,
    @Body() body: ClockifyResponse
  ): Promise<ClockifyTimer> {
    // if the signatures don't match we need to eject with a 403 error
    if (clockifySignature != process.env.CLOCKIFY_SIGNATURE_START) {
      console.error('Invalid Clockify Webhook Signature provided');
      throw new ForbiddenException(
        'Invalid Clockify Webhook Signature provided'
      );
    }

    console.log(body);

    const { project, timeInterval } = body;

    // if there isn't a projectID eject now
    if (project?.id == null) {
      console.error('Must provide projectID');
      throw new BadRequestException('Must provide projectId');
    }
    // send a message to discord
    this.webhooks.sendDiscordMessage(
      `Clockify timer started - ${project.name}`
    );

    // return the started timer
    return this.clockify.addClockifyTimer(project.id, timeInterval.start);
  }

  @Post('clockify/stop')
  webhookClockifyStop(
    @Headers('clockify-signature') clockifySignature: string,
    @Body() body: ClockifyResponse
  ): Promise<ClockifyTimer> {
    // if the signatures don't match we need to eject with a 403 error
    if (clockifySignature != process.env.CLOCKIFY_SIGNATURE_STOP) {
      console.error('Invalid Clockify Webhook Signature provided');
      throw new ForbiddenException(
        'Invalid Clockify Webhook Signature provided'
      );
    }
    const { project, timeInterval } = body;

    // if the projectId is null we just will ignore this
    if (project?.id == null) {
      console.error('Must provide projectID');
      throw new BadRequestException('Must provide projectId');
    }

    // convert the timeInterval to a number
    const timeElapsed = formatDistanceStrict(
      parseISO(timeInterval.end),
      parseISO(timeInterval.start)
    );

    // Send a message to discord
    this.webhooks.sendDiscordMessage(
      `Clockify timer stopped - ${project.name}; Elapsed Time: ${timeElapsed}`
    );
    return this.clockify.removeClockifyTimer(project.id);
  }

  @Post('clockify/delete')
  webhookClockifyDelete(
    @Headers('clockify-signature') clockifySignature: string,
    @Body() body: ClockifyResponse
  ): Promise<ClockifyTimer> {
    // if the signatures don't match we need to eject with a 403 error
    if (clockifySignature != process.env.CLOCKIFY_SIGNATURE_STOP) {
      console.error('Invalid Clockify Webhook Signature provided');
      throw new ForbiddenException(
        'Invalid Clockify Webhook Signature provided'
      );
    }
    const { project } = body;

    // if the projectId is null we just will ignore this
    if (project?.id == null) {
      console.error('Must provide projectID');
      throw new BadRequestException('Must provide projectId');
    }

    // Send a message to discord
    this.webhooks.sendDiscordMessage(
      `Clockify timer deleted - ${project.name}`
    );
    return this.clockify.removeClockifyTimer(project.id);
  }
}
