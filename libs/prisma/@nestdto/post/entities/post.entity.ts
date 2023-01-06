
import {Image} from '../../image/entities/image.entity'
import {PostCategory} from '../../postCategory/entities/postCategory.entity'
import {PostTag} from '../../postTag/entities/postTag.entity'


export class Post {
  id: number ;
title: string ;
metaTitle: string ;
slug: string ;
summary: string ;
wordCount: number ;
published: boolean ;
createdAt: Date ;
updatedAt: Date ;
publishedAt: Date  | null;
content: string ;
imagePublic_id: string  | null;
postCategoryId: number ;
featuredImage?: Image  | null;
category?: PostCategory ;
tags?: PostTag[] ;
}
