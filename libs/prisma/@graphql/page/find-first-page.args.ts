import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageWhereInput } from './page-where.input';
import { Type } from 'class-transformer';
import { PageOrderByWithRelationInput } from './page-order-by-with-relation.input';
import { PageWhereUniqueInput } from './page-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PageScalarFieldEnum } from './page-scalar-field.enum';

@ArgsType()
export class FindFirstPageArgs {

    @Field(() => PageWhereInput, {nullable:true})
    @Type(() => PageWhereInput)
    where?: PageWhereInput;

    @Field(() => [PageOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PageOrderByWithRelationInput>;

    @Field(() => PageWhereUniqueInput, {nullable:true})
    cursor?: PageWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PageScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PageScalarFieldEnum>;
}
