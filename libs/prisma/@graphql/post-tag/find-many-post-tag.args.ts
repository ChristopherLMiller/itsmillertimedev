import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostTagWhereInput } from './post-tag-where.input';
import { Type } from 'class-transformer';
import { PostTagOrderByWithRelationInput } from './post-tag-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { PostTagWhereUniqueInput } from './post-tag-where-unique.input';
import { Int } from '@nestjs/graphql';
import { PostTagScalarFieldEnum } from './post-tag-scalar-field.enum';

@ArgsType()
export class FindManyPostTagArgs {

    @Field(() => PostTagWhereInput, {nullable:true})
    @Type(() => PostTagWhereInput)
    where?: PostTagWhereInput;

    @Field(() => [PostTagOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<PostTagOrderByWithRelationInput>;

    @Field(() => PostTagWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<PostTagWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [PostTagScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof PostTagScalarFieldEnum>;
}
