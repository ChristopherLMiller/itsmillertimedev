
import {PublicationStatus,Visibility} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class CreateGalleryImageDto {
  title: string;
slug: string;
@ApiProperty({ enum: PublicationStatus})
published: PublicationStatus;
publishedAt: Date;
@ApiProperty({ enum: Visibility})
visibility?: Visibility;
url: string;
}
