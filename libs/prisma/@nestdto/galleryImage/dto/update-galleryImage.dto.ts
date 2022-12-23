
import {PublicationStatus,Visibility} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class UpdateGalleryImageDto {
  title?: string;
slug?: string;
@ApiProperty({ enum: PublicationStatus})
published?: PublicationStatus;
publishedAt?: Date;
@ApiProperty({ enum: Visibility})
visibility?: Visibility;
url?: string;
}
