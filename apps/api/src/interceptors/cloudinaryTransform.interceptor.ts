import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import path = require('path');

@Injectable()
export class CloudinaryTransformInterceptor<T> implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const query = request.query;

    const parsedQueryParam = path.parse(query.public_id);
    const public_id = `${parsedQueryParam.dir}/${parsedQueryParam.name}`;

    request.query.public_id = public_id;

    return next.handle();
  }
}
