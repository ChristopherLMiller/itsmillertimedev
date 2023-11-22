import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { SettingsService } from '../../app/common/settings/settings.service';

@Injectable()
export class ApiKeyAuthGuard implements CanActivate {
  constructor(private readonly settings: SettingsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const apiKey = await this.settings.getFieldValue('general', 'api-key');
    const request = context.switchToHttp().getRequest();
    return request.headers['x-api-key'] === apiKey;
  }
}
