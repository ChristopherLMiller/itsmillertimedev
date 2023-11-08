import { Client, LatLngLiteral } from '@googlemaps/google-maps-services-js';
import { Injectable, Logger } from '@nestjs/common';
import { Marker } from '@prisma/client';
import { PrismaService } from '../../common/prisma/prisma.service';
import { SettingsService } from '../../common/settings/settings.service';

@Injectable()
export class MapsService {
  constructor(
    private prisma: PrismaService,
    private readonly settings: SettingsService,
  ) {
    this.loadSettings().then((settings) => {
      this.apiKey = settings.apiKey;
      this._logger.log('Settings loaded successfully');
    });
  }

  // Local variables
  private readonly _logger = new Logger(MapsService.name);
  private gmapsClient = new Client({});
  private apiKey;

  async loadSettings() {
    const apiKey = await this.settings.getFieldValue('google', 'maps-api-key');

    return { apiKey };
  }

  findMapMarkers(): Promise<Marker[]> {
    return this.prisma.marker.findMany();
  }

  createMapMarker(data: Marker): Promise<Marker> {
    return this.prisma.marker.create({ data });
  }

  async getGPSCoordinateFromLocation(
    place: string,
  ): Promise<{ gps: LatLngLiteral; address: string } | null> {
    const response = await this.gmapsClient.geocode({
      params: {
        address: place,
        key: this.apiKey,
      },
    });

    if (response.status !== 200) {
      return null;
    } else {
      const { formatted_address, geometry } = response.data.results[0];
      return { gps: geometry.location, address: formatted_address };
    }
  }
}
