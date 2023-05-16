
import {Prisma} from '@prisma/client'
import {Post} from '../../post/entities/post.entity'


export class Image {
  id: number ;
public_id: string ;
version: number  | null;
format: string  | null;
url: string  | null;
secureUrl: string  | null;
alt: string  | null;
caption: string  | null;
width: number  | null;
height: number  | null;
bytes: number  | null;
createdAt: Date ;
thumbnail: string  | null;
exif: Prisma.JsonValue  | null;
updatedAt: Date ;
Post?: Post[] ;
}
