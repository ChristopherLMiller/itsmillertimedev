import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PermissionsPublic } from '../../../common/decorators/auth.decorator';
import { supabaseAuthGuard } from '../../../common/guards/supabaseAuth.guard';
import { MapsService } from './maps.service';

@Controller({ version: '1', path: 'maps' })
@ApiTags('Maps')
@UseGuards(supabaseAuthGuard)
export class MapsController {
  constructor(private maps: MapsService) {}

  @Get('markers')
  @PermissionsPublic()
  async getMarkers(): Promise<any> {
    const data = await this.maps.findMapMarkers();
    return { data: { markers: data }, meta: { totalRecords: data.length } };
  }

  @Post('markers')
  async createMarker(@Body() body: any): Promise<any> {
    const data = await this.maps.createMapMarker(body);
    return { data: { marker: data } };
  }
}
