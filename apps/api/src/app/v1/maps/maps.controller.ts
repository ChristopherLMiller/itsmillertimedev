import { DataResponse } from '@itsmillertimedev/data';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Marker } from '@prisma/client';
import { PermissionsNodes } from '../../../common/decorators/auth.decorator';
import { MapsService } from './maps.service';
import { MapsPermissionNodes } from './permissions.nodes';

@Controller({ version: '1', path: 'maps' })
@ApiTags('Maps')
@UseInterceptors(CacheInterceptor)
export class MapsController {
  constructor(private maps: MapsService) {}

  @Get('markers')
  async getMarkers(): DataResponse<Array<Marker>> {
    const data = await this.maps.findMapMarkers();
    return { data, meta: { totalRecords: data.length } };
  }

  @Post('markers')
  @PermissionsNodes(MapsPermissionNodes.CREATE_MARKER)
  async createMarker(@Body() body: Marker): DataResponse<Marker> {
    return { data: await this.maps.createMapMarker(body) };
  }
}
