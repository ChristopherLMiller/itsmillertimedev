import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { DataResponse } from '../../../lib/response';

import { PermissionsPublic } from '../../../common/decorators/auth.decorator';
import { supabaseAuthGuard } from '../../../common/guards/supabaseAuth.guard';
import { LastFMService } from './lastfm.service';

@Controller({ version: '1', path: 'lastfm' })
@UseGuards(supabaseAuthGuard)
export class LastFMController {
  constructor(private lastfm: LastFMService) {}

  @Get('artists')
  @PermissionsPublic()
  async getTopArtists(): DataResponse<any> {
    return { data: await this.lastfm.getTopArtists() };
  }

  @Get('user/:username')
  @PermissionsPublic()
  async getUser(@Param() params): DataResponse<any> {
    return { data: await this.lastfm.getUser(params.username) };
  }

  @Get('playing/:username')
  @PermissionsPublic()
  async getCurrentlyPlaying(@Param() params): DataResponse<any> {
    return { data: await this.lastfm.getCurrentlyPlaying(params.username) };
  }
}
