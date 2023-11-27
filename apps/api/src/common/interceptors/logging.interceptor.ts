import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable, tap } from 'rxjs';

@Injectable()
export class LoggingInterceptor<T> implements NestInterceptor<T> {
  constructor(private readonly reflector: Reflector) {}

  private readonly _logger = new Logger(LoggingInterceptor.name);

  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<T> | Promise<Observable<T>> {
    // setup and retrieve varabiales for the current request
    const response = context.switchToHttp().getResponse();
    const request = context.switchToHttp().getRequest();
    const { statusCode } = response;
    const { originalUrl, method, params, query, body } = request;

    // Grab out the allowable timing information from the reflector
    const allowableTimings =
      this.reflector.get('response-time-limit', context.getHandler()) || 30;

    // Start perf timer to measure the response time
    const startTime = performance.now();

    return next.handle().pipe(
      tap(() => {
        // calculate the total response time
        const totalTime = Math.round(performance.now() - startTime);

        /// log this information out now
        this._logger.log(
          `[${method}] Req: ${originalUrl}: Client IP: ${
            request.headers['x-forwarded-for']
          } Res: ${statusCode} - Total Time: ${totalTime}ms ${
            totalTime < allowableTimings ? '✅' : '❌'
          }`,
        );

        // Additionally log out if params, query, or body had data so we have an idea of what was requested
        if (
          Object.keys(params).length ||
          Object.keys(query).length ||
          Object.keys(body).length
        ) {
          let output = {};

          if (Object.keys(params).length) output = { ...output, params };
          if (Object.keys(query).length) output = { ...output, query };
          if (Object.keys(body).length) output = { ...output, body };
          this._logger.log(output);
        }
      }),
    );
  }
}
