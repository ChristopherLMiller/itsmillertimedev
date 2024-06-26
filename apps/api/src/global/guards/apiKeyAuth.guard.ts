import {
  CanActivate,
  ExecutionContext,
  Injectable,
  SetMetadata,
} from "@nestjs/common";
import { SettingsService } from "../../app/common/settings/settings.service";

@Injectable()
export class ApiKeyAuthGuard implements CanActivate {
  constructor(private readonly settings: SettingsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const apiKey = await this.settings.getFieldValue("general", "api-key");
    const request = context.switchToHttp().getRequest();

    if (request.headers["x-api-key"] === apiKey) {
      SetMetadata("auth_permission_node", ["PUBLIC"]);
      return true;
    }

    // Implict deny
    return false;
  }
}
