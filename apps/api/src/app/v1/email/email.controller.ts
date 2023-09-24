import { Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BasicAuthGuard } from '../../../common/guards/basicAuth.guard';

@Controller({ version: '1', path: 'email' })
@ApiTags('Email')
@UseGuards(BasicAuthGuard)
export class EmailController {
  cosntructor() {
    // Nothing to see here
  }

  // TODO: Implement email sending
  // Right now send an email does absolutely nothing, need to use sendgrid
  // to handle the sending of emails
  @Post('send')
  sendEmail(): any {
    return true;
  }
}
