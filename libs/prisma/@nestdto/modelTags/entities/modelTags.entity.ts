
import {Model} from '../../model/entities/model.entity'


export class ModelTags {
  id: number ;
slug: string ;
title: string ;
Model?: Model  | null;
modelId: number  | null;
}
