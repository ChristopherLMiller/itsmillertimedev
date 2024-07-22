import {
  BadRequestException,
  HttpStatus,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { throwError } from 'rxjs';

export function axiosErrorHandler(error: any) {
  const logger = new Logger('axiosErrorHandler');
  switch (error?.response?.status) {
    case HttpStatus.BAD_REQUEST:
      logger.log(`Error response message: ${error.response.data.message}`);
      logger.log(error.response.config);
      return throwError(
        () => new BadRequestException(error.response.data.message),
      );
    case HttpStatus.UNAUTHORIZED:
      return throwError(() => new UnauthorizedException(error));
    case HttpStatus.INTERNAL_SERVER_ERROR:
      return throwError(() => new InternalServerErrorException(error));
    case HttpStatus.NOT_FOUND:
      return throwError(() => new NotFoundException(error.response.data));
    default:
      console.log(error);
      return throwError(() => new Error(error));
  }
}
