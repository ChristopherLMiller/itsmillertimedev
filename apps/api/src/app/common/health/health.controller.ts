import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { IgnoreLogging } from '../../../common/decorators/logging.decorator';

@Controller({ path: 'health' })
export class HealthController {
  @Get('/status')
  @ApiOperation({ description: 'Get the stauts of the server' })
  @IgnoreLogging()
  getAppStatus() {
    const healthcheck = {
      uptime: process.uptime(),
      responseTime: process.hrtime(),
      message: 'ok',
      timestamp: Date.now(),
    };

    return { data: healthcheck };
  }
}