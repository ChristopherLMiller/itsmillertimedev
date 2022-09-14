import {
  BadRequestException,
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class ClientUUIDInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const clientUUID = context.switchToHttp().getRequest().headers[
      'x-client-uuid'
    ];
    if (clientUUID !== undefined) {
      return next.handle();
    } else {
      throw new BadRequestException('Client UUID is required');
    }
  }
}
