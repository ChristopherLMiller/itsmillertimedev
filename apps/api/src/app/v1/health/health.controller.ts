import { CacheTTL } from '@nestjs/cache-manager';
import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { PermissionsPublic } from '../../../common/decorators/auth.decorator';
import { NoLogging } from '../../../common/decorators/logging.decorator';

@Controller({ version: '1', path: 'health' })
export class HealthController {
  @Get('/status')
  @ApiOperation({ description: 'Get the stauts of the server' })
  @PermissionsPublic()
  @NoLogging()
  @CacheTTL(0)
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
