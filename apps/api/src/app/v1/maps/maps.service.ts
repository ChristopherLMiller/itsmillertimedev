import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class MapsService {
  constructor(private prisma: PrismaService) {}

  findMapMarkers(): any {
    return this.prisma.marker.findMany();
  }

  createMapMarker(data: any): any {
    return this.prisma.marker.create({ data });
  }
}
