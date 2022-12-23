import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkerWhereInput } from './marker-where.input';
import { Type } from 'class-transformer';
import { MarkerOrderByWithRelationInput } from './marker-order-by-with-relation.input';
import { MarkerWhereUniqueInput } from './marker-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MarkerScalarFieldEnum } from './marker-scalar-field.enum';

@ArgsType()
export class FindManyMarkerArgs {

    @Field(() => MarkerWhereInput, {nullable:true})
    @Type(() => MarkerWhereInput)
    where?: MarkerWhereInput;

    @Field(() => [MarkerOrderByWithRelationInput], {nullable:true})
    @Type(() => MarkerOrderByWithRelationInput)
    orderBy?: Array<MarkerOrderByWithRelationInput>;

    @Field(() => MarkerWhereUniqueInput, {nullable:true})
    @Type(() => MarkerWhereUniqueInput)
    cursor?: MarkerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [MarkerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof MarkerScalarFieldEnum>;
}
