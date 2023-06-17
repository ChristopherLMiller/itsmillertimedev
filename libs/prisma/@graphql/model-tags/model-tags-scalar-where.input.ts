import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class ModelTagsScalarWhereInput {

    @Field(() => [ModelTagsScalarWhereInput], {nullable:true})
    AND?: Array<ModelTagsScalarWhereInput>;

    @Field(() => [ModelTagsScalarWhereInput], {nullable:true})
    OR?: Array<ModelTagsScalarWhereInput>;

    @Field(() => [ModelTagsScalarWhereInput], {nullable:true})
    NOT?: Array<ModelTagsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    modelId?: IntNullableFilter;
}
