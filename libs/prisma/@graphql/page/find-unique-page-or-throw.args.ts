import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageWhereUniqueInput } from './page-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePageOrThrowArgs {

    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: Prisma.AtLeast<PageWhereUniqueInput, 'id' | 'slug'>;
}
