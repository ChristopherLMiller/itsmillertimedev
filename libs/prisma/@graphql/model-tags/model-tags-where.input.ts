import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { ModelNullableRelationFilter } from '../model/model-nullable-relation-filter.input';

@InputType()
export class ModelTagsWhereInput {

    @Field(() => [ModelTagsWhereInput], {nullable:true})
    AND?: Array<ModelTagsWhereInput>;

    @Field(() => [ModelTagsWhereInput], {nullable:true})
    OR?: Array<ModelTagsWhereInput>;

    @Field(() => [ModelTagsWhereInput], {nullable:true})
    NOT?: Array<ModelTagsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    modelId?: IntNullableFilter;

    @Field(() => ModelNullableRelationFilter, {nullable:true})
    Model?: ModelNullableRelationFilter;
}
