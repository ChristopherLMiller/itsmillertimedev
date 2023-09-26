import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScaleWhereInput } from './scale-where.input';
import { Type } from 'class-transformer';
import { ScaleOrderByWithRelationInput } from './scale-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { ScaleWhereUniqueInput } from './scale-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ScaleScalarFieldEnum } from './scale-scalar-field.enum';

@ArgsType()
export class FindFirstScaleArgs {

    @Field(() => ScaleWhereInput, {nullable:true})
    @Type(() => ScaleWhereInput)
    where?: ScaleWhereInput;

    @Field(() => [ScaleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ScaleOrderByWithRelationInput>;

    @Field(() => ScaleWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ScaleWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ScaleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ScaleScalarFieldEnum>;
}
