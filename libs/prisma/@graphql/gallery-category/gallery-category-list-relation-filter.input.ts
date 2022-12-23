import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GalleryCategoryWhereInput } from './gallery-category-where.input';

@InputType()
export class GalleryCategoryListRelationFilter {

    @Field(() => GalleryCategoryWhereInput, {nullable:true})
    every?: GalleryCategoryWhereInput;

    @Field(() => GalleryCategoryWhereInput, {nullable:true})
    some?: GalleryCategoryWhereInput;

    @Field(() => GalleryCategoryWhereInput, {nullable:true})
    none?: GalleryCategoryWhereInput;
}
