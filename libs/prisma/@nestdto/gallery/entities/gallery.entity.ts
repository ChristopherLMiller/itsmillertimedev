
import {Visibility} from '@prisma/client'
import {GalleryCategory} from '../../galleryCategory/entities/galleryCategory.entity'
import {GalleryTag} from '../../galleryTag/entities/galleryTag.entity'
import {GalleryImage} from '../../galleryImage/entities/galleryImage.entity'


export class Gallery {
  id: number ;
createdAt: Date ;
updatedAt: Date ;
title: string ;
slug: string ;
meta: string ;
description: string ;
visibility: Visibility ;
isNsfw: boolean ;
image: string ;
categories?: GalleryCategory[] ;
tags?: GalleryTag[] ;
images?: GalleryImage[] ;
}
