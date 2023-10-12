import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  use(req: Request, res: Response, next: NextFunction) {
    const startTime = Date.now();
    const remoteIP = req.ip;

    // call the next function before finishing off, for timing
    next();

    const responseCode = res.statusCode;
    const endTime = Date.now();
    const totalTime = endTime - startTime;

    this.logger.log(
      `${totalTime < 30 ? '✅' : '❌'} Req: ${
        req.originalUrl
      }: Remote IP: ${remoteIP} Res: ${responseCode} - Total Time: ${totalTime}ms`,
    );
  }
}
