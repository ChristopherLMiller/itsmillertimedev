
import {Post} from '../../post/entities/post.entity'


export class PostCategory {
  id: number ;
slug: string ;
title: string ;
posts?: Post[] ;
}
