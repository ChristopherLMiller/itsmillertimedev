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

  /***
   * @Todo Implement Email Sending
   * @Body Sending of emails isn't implemented and needs to be */
  @Post('send')
  sendEmail(): any {
    return true;
  }
}
