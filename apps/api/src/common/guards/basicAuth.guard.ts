import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { SettingsService } from '../../app/settings/settings.service';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  constructor(private readonly settings: SettingsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const apiKey = await this.settings.getField('general', 'api_key');
    const request = context.switchToHttp().getRequest();
    return request.headers['x-api-key'] === apiKey;
  }
}
