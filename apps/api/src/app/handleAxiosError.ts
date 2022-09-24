import {
  BadRequestException,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { throwError } from 'rxjs';

export function handleAxiosError(error: any) {
  console.log(error.response.data);
  switch (error.response.status) {
    case HttpStatus.BAD_REQUEST:
      return throwError(() => new BadRequestException(error));
    case HttpStatus.UNAUTHORIZED:
      return throwError(() => new UnauthorizedException(error));
    case HttpStatus.INTERNAL_SERVER_ERROR:
      return throwError(() => new InternalServerErrorException(error));
    case HttpStatus.NOT_FOUND:
      return throwError(() => new NotFoundException(error.response.data));
    default:
      return throwError(() => new Error(error));
  }
}
