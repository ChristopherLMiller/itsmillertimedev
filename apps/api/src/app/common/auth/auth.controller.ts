import { SupabaseWebhookResponse } from '@itsmillertimedev/data';
import { Body, Controller, Logger, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { HookdeckGuard } from '../../../common/guards/hookdeck.guard';
import { AuthService } from './auth.service';

@Controller({ path: 'auth' })
@ApiTags('Authentication', 'Authorization')
export class AuthController {
  constructor(private authService: AuthService) {}

  private readonly _logger = new Logger(AuthController.name);

  @Post('supabase/webhook')
  @UseGuards(HookdeckGuard)
  async SupabaseWebhookUser(
    @Body() body: SupabaseWebhookResponse,
  ): Promise<User> {
    if (body.type === 'INSERT') {
      return this.authService.createUser(body.record);
    } else if (body.type === 'DELETE') {
      return this.authService.deleteUser(body.old_record.id);
    }
  }
}
