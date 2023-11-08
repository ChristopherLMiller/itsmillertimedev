import { Controller, Get } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { PermissionsPublic } from '../../../common/decorators/auth.decorator';

@Controller({ version: '1', path: 'health' })
export class HealthController {
  @Get('/status')
  @ApiOperation({ description: 'Get the stauts of the server' })
  @PermissionsPublic()
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
