
import {Prisma} from '@prisma/client'


export class Marker {
  id: number ;
lat: Prisma.Decimal ;
lon: Prisma.Decimal ;
siteURL: string  | null;
galleryURL: string  | null;
title: string ;
rating: number ;
visited: boolean ;
visits: number ;
}
