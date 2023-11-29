import { DataResponse } from '@itsmillertimedev/data';
import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Settings } from '@prisma/client';
import { HttpStatusCode } from 'axios';
import { PermissionsPublic } from '../../../common/decorators/auth.decorator';
import { ApiKeyAuthGuard } from '../../../common/guards/apiKeyAuth.guard';
import { SettingsService } from './settings.service';

@Controller({ path: 'settings' })
@ApiTags('Settings')
@UseGuards(ApiKeyAuthGuard)
export class SettingsController {
  constructor(private settings: SettingsService) {}

  @Get('setting')
  @ApiOperation({ summary: 'Retrieve a setting from the DB' })
  @ApiResponse({ status: HttpStatusCode.Ok, description: 'Success' })
  @ApiResponse({
    status: HttpStatusCode.Unauthorized,
    description: 'Invalid API key',
  })
  @PermissionsPublic() // we need this to bypass the supabase auth guard
  async getSetting(
    @Query('key') key: Settings['key'],
    @Query('field') field: string,
  ): DataResponse<Settings> {
    return {
      data: await this.settings.getFieldValue(key, field),
      meta: { field, key },
    };
  }
}
