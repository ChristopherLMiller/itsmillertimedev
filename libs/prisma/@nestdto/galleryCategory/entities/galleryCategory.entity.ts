
import {Gallery} from '../../gallery/entities/gallery.entity'


export class GalleryCategory {
  id: number ;
title: string ;
slug: string ;
galleryId: number  | null;
Gallery?: Gallery  | null;
}
