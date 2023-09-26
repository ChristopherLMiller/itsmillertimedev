import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ModelTagsWhereInput } from './model-tags-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { ModelNullableRelationFilter } from '../model/model-nullable-relation-filter.input';

@InputType()
export class ModelTagsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [ModelTagsWhereInput], {nullable:true})
    AND?: Array<ModelTagsWhereInput>;

    @Field(() => [ModelTagsWhereInput], {nullable:true})
    OR?: Array<ModelTagsWhereInput>;

    @Field(() => [ModelTagsWhereInput], {nullable:true})
    NOT?: Array<ModelTagsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    modelId?: IntNullableFilter;

    @Field(() => ModelNullableRelationFilter, {nullable:true})
    Model?: ModelNullableRelationFilter;
}
