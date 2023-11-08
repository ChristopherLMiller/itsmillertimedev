import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { SettingsService } from '../../app/common/settings/settings.service';

@Injectable()
export class HookdeckGuard implements CanActivate {
  constructor(private readonly settings: SettingsService) {}

  private readonly _logger = new Logger(HookdeckGuard.name);

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const hookdeckApiKey = await this.settings.getFieldValue(
      'hookdeck',
      'api-key',
    );

    // Now compare the signature from the request to that from the settings, if the yare the same then the auth passes
    if (request.headers['x-api-key'] === hookdeckApiKey) {
      return true;
    } else {
      this._logger.log(`Hookdeck headers don't match, request denied`);
      return false;
    }
  }
}
