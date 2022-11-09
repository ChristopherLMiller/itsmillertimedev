import { Controller, Post, UseGuards, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BasicAuthGuard } from '../../../guards/basicAuth.guard';
import { ResponseTransformInterceptor } from '../../../interceptors/responseTransform.interceptor';

@Controller({ version: '1', path: 'email' })
@ApiTags('Email')
@UseGuards(BasicAuthGuard)
@UseInterceptors(ResponseTransformInterceptor)
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
