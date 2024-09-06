import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request Details:');
    console.log('IP Address:', req.ip);
    console.log('Method:', req.method);
    console.log('URL:', req.originalUrl);
    console.log('Query Params:', req.query);
    console.log('Request Body:', req.body);
    console.log('Request Path:', req.path);
    console.log('Protocol:', req.protocol);
    console.log('Cookies:', req.cookies);
    console.log('User Agent:', req.headers['user-agent']);
    console.log('Referer:', req.headers.referer);
    console.log('Host:', req.headers.host);
    console.log('Request Time:', new Date().toISOString());
    next();
  }
}

export function logger(req: Request, res: Response, next: NextFunction) {
  console.log(`Request...`);
  console.log('Request Details:');

  next();
};