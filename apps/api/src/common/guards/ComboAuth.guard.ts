import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
} from '@nestjs/common';
import { ApiKeyAuthGuard } from './apiKeyAuth.guard';
import { SupabaseAuthGuard } from './supabaseAuth.guard';

@Injectable()
export class ComboAuthGuard implements CanActivate {
  constructor(
    private readonly supabaseAuth: SupabaseAuthGuard,
    private readonly apiKeyAuth: ApiKeyAuthGuard,
  ) {}

  private readonly _logger = new Logger(ComboAuthGuard.name);

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const supabaseAuth = await this.supabaseAuth.canActivate(context);
    const apiKeyAuth = await this.apiKeyAuth.canActivate(context);

    return supabaseAuth || apiKeyAuth;
  }
}
