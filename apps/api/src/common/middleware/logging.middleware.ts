import { Logger } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export function logger(req: Request, res: Response, next: NextFunction) {
  // ignore the 'health-check' route as its just render checking app availablility
  if (req.originalUrl !== '/api/v1/health') {
    Logger.log(
      `Request: ${req.hostname}, URL: ${req.originalUrl}; HTTP Code: ${res.statusCode}`
    );
  }
  next();
}
