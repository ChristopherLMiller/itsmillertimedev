import { Controller, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { supabaseAuthGuard } from '../../../common/guards/supabaseAuth.guard';

@Controller({ version: '1', path: 'email' })
@ApiTags('Email')
@UseGuards(supabaseAuthGuard)
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
