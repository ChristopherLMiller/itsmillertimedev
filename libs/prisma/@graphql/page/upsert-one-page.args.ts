import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PageWhereUniqueInput } from './page-where-unique.input';
import { Type } from 'class-transformer';
import { PageCreateInput } from './page-create.input';
import { PageUpdateInput } from './page-update.input';

@ArgsType()
export class UpsertOnePageArgs {

    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: Prisma.AtLeast<PageWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => PageCreateInput, {nullable:false})
    @Type(() => PageCreateInput)
    create!: PageCreateInput;

    @Field(() => PageUpdateInput, {nullable:false})
    @Type(() => PageUpdateInput)
    update!: PageUpdateInput;
}
