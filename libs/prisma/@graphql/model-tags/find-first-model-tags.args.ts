import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelTagsWhereInput } from './model-tags-where.input';
import { Type } from 'class-transformer';
import { ModelTagsOrderByWithRelationInput } from './model-tags-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ModelTagsWhereUniqueInput } from './model-tags-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ModelTagsScalarFieldEnum } from './model-tags-scalar-field.enum';

@ArgsType()
export class FindFirstModelTagsArgs {

    @Field(() => ModelTagsWhereInput, {nullable:true})
    @Type(() => ModelTagsWhereInput)
    where?: ModelTagsWhereInput;

    @Field(() => [ModelTagsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ModelTagsOrderByWithRelationInput>;

    @Field(() => ModelTagsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ModelTagsWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ModelTagsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ModelTagsScalarFieldEnum>;
}
