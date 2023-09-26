import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelWhereInput } from './model-where.input';
import { Type } from 'class-transformer';
import { ModelOrderByWithRelationInput } from './model-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ModelScalarFieldEnum } from './model-scalar-field.enum';

@ArgsType()
export class FindManyModelArgs {

    @Field(() => ModelWhereInput, {nullable:true})
    @Type(() => ModelWhereInput)
    where?: ModelWhereInput;

    @Field(() => [ModelOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ModelOrderByWithRelationInput>;

    @Field(() => ModelWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ModelWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ModelScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ModelScalarFieldEnum>;
}
