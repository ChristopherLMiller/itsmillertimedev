import { Controller, Get } from '@nestjs/common';

@Controller({ version: '1', path: 'health' })
export class HealthController {
  @Get('/status')
  getAppStatus() {
    const healthcheck = {
      uptime: process.uptime(),
      responseTime: process.hrtime(),
      message: 'ok',
      timestamp: Date.now(),
    };

    return healthcheck;
  }
}
