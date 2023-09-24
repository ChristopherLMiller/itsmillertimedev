import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlertWhereInput } from './alert-where.input';
import { Type } from 'class-transformer';
import { AlertOrderByWithRelationInput } from './alert-order-by-with-relation.input';
import { AlertWhereUniqueInput } from './alert-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AlertScalarFieldEnum } from './alert-scalar-field.enum';

@ArgsType()
export class FindManyAlertArgs {

    @Field(() => AlertWhereInput, {nullable:true})
    @Type(() => AlertWhereInput)
    where?: AlertWhereInput;

    @Field(() => [AlertOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AlertOrderByWithRelationInput>;

    @Field(() => AlertWhereUniqueInput, {nullable:true})
    cursor?: AlertWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AlertScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AlertScalarFieldEnum>;
}
