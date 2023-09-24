import { Response } from '@itsmillertimedev/data';
import { Body, Controller, Post } from '@nestjs/common';
import { Session } from '@supabase/supabase-js';
import { PermissionsPublic } from '../../common/decorators/auth.decorator';
import { AuthService } from './auth.service';

@Controller({ path: 'auth' })
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signin')
  @PermissionsPublic()
  async signin(@Body() body): Response<Session> {
    return {
      data: await this.authService.signInEmail(body.email, body.password),
    };
  }

  @Post('/user')
  @PermissionsPublic()
  async validate(@Body() body) {
    const data = await this.authService.getUser(body.token);
    return data;
  }
}
