
import {Post} from '../../post/entities/post.entity'


export class PostTag {
  id: number ;
postId: number  | null;
slug: string ;
title: string ;
posts?: Post[] ;
}
