import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import path = require('path');

@Injectable()
export class CloudinaryTransformInterceptor<T> implements NestInterceptor {
  constructor(private readonly reflector: Reflector) {}

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    if (this.reflector.get('ignoreCloudinary', context.getHandler())) {
      return next.handle();
    }
    const request = context.switchToHttp().getRequest();
    const query = request.query;

    const parsedQueryParam = path.parse(query.public_id);
    const public_id = `${parsedQueryParam.dir}/${parsedQueryParam.name}`;

    request.query.public_id = public_id;

    return next.handle();
  }
}
