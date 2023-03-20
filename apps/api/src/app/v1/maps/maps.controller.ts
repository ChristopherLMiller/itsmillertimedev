import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BasicAuthGuard } from '../../../common/guards/basicAuth.guard';
import { ResponseTransformInterceptor } from '../../../common/interceptors/responseTransform.interceptor';
import { MapsService } from './maps.service';

@Controller({ version: '1', path: 'maps' })
@ApiTags('Maps')
@UseGuards(BasicAuthGuard)
@UseInterceptors(ResponseTransformInterceptor)
export class MapsController {
  constructor(private maps: MapsService) {}

  @Get('markers')
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
