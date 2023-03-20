import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';

@Injectable()
export class BasicAuthGuard implements CanActivate {
  constructor(private readonly config: ConfigService) {}

  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    return (
      request.headers['x-api-key'] === this.config.get('SUPER_SECRET_API_KEY')
    );
  }
}
