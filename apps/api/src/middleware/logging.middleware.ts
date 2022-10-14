import { Logger } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  Logger.log(
    `Request: ${req.hostname}, URL: ${req.originalUrl}; HTTP Code: ${res.statusCode}`
  );
  next();
}
