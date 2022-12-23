
import {Prisma} from '@prisma/client'




export class UpdateMarkerDto {
  lat?: Prisma.Decimal;
lon?: Prisma.Decimal;
siteURL?: string;
galleryURL?: string;
title?: string;
}
