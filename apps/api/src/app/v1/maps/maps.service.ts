import { Client, LatLngLiteral } from '@googlemaps/google-maps-services-js';
import { Injectable } from '@nestjs/common';
import { Marker } from '@prisma/client';
import { config } from '../../../../config';
import { PrismaService } from '../../../common/prisma/prisma.service';

@Injectable()
export class MapsService {
  constructor(private prisma: PrismaService) {}

  gmapsClient = new Client({});

  findMapMarkers(): Promise<Marker[]> {
    return this.prisma.marker.findMany();
  }

  createMapMarker(data: any): Promise<Marker> {
    return this.prisma.marker.create({ data });
  }

  async getGPSCoordinateFromLocation(
    place: string
  ): Promise<{ gps: LatLngLiteral; address: string } | null> {
    const response = await this.gmapsClient.geocode({
      params: {
        address: place,
        key: config.google_maps.key,
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
