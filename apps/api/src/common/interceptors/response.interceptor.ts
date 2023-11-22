import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<Response> {
    const statusCode = context.switchToHttp().getResponse().statusCode;

    const startTime = performance.now();

    return next.handle().pipe(
      map((data) => {
        const totalTime = Math.round(performance.now() - startTime);
        return { ...data, meta: { ...data.meta, totalTime }, statusCode };
      }),
    );
  }
}
