
import {PublicationStatus,Visibility} from '@prisma/client'
import {Gallery} from '../../gallery/entities/gallery.entity'


export class GalleryImage {
  id: number ;
createdAt: Date ;
updatedAt: Date ;
title: string ;
slug: string ;
published: PublicationStatus ;
publishedAt: Date ;
visibility: Visibility  | null;
url: string ;
galleries?: Gallery[] ;
}
