
import {Gallery} from '../../gallery/entities/gallery.entity'


export class GalleryTag {
  id: number ;
title: string ;
slug: string ;
galleryId: number  | null;
Gallery?: Gallery  | null;
}
