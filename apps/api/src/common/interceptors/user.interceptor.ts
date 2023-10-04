import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../../app/common/auth/auth.service';

@Injectable()
export class UserInterceptor<T> implements NestInterceptor {
  constructor(private authService: AuthService) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Promise<Observable<T>> {
    const req = context.switchToHttp().getRequest();
    const jwt = req.headers?.authorization;

    if (jwt) {
      const { data } = await this.authService.getUser(jwt.split(' ')[1]);
      req.user = data;
    }

    return next.handle();
  }
}
