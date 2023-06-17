
import {Visibility} from '@prisma/client'
import {ApiProperty} from '@nestjs/swagger'




export class CreateModelDto {
  title: string;
slug: string;
@ApiProperty({ enum: Visibility})
visibility: Visibility;
metaTitle: string;
summary: string;
featuredImage: string;
clockifyProjectId?: string;
contents: string;
yearReleased: number;
completedAt: Date;
imagePublic_id: string;
}
