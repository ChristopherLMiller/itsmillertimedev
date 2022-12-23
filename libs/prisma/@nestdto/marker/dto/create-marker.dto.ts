
import {Prisma} from '@prisma/client'




export class CreateMarkerDto {
  lat: Prisma.Decimal;
lon: Prisma.Decimal;
siteURL?: string;
galleryURL?: string;
title: string;
}
