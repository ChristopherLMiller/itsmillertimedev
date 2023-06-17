
import {Visibility} from '@prisma/client'
import {ModelTags} from '../../modelTags/entities/modelTags.entity'
import {Image} from '../../image/entities/image.entity'
import {Manufacturer} from '../../manufacturer/entities/manufacturer.entity'
import {Scale} from '../../scale/entities/scale.entity'


export class Model {
  id: number ;
slug: string ;
completed: boolean ;
visibility: Visibility ;
metaTitle: string ;
summary: string ;
featuredImage: string ;
createdAt: Date ;
updatedAt: Date ;
tags?: ModelTags[] ;
images?: Image[] ;
manufacturer?: Manufacturer ;
scale?: Scale ;
clockifyProjectId: string  | null;
contents: string ;
yearReleased: number ;
completedAt: Date ;
imagePublic_id: string ;
manufacturerId: number ;
scaleId: number ;
}
