import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryWhereInput } from './gallery-where.input';

@InputType()
export class GalleryRelationFilter {

    @Field(() => GalleryWhereInput, {nullable:true})
    is?: GalleryWhereInput;

    @Field(() => GalleryWhereInput, {nullable:true})
    isNot?: GalleryWhereInput;
}
