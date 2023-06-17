
import {Image} from '../../image/entities/image.entity'


export class Page {
  id: number ;
title: string ;
slug: string ;
summary: string ;
content: string  | null;
createdAt: Date ;
updatedAt: Date ;
featuredImage?: Image  | null;
imagePublic_id: string  | null;
isPublic: boolean ;
}
