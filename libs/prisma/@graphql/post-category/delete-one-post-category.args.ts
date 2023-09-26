import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostCategoryWhereUniqueInput } from './post-category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnePostCategoryArgs {

    @Field(() => PostCategoryWhereUniqueInput, {nullable:false})
    @Type(() => PostCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<PostCategoryWhereUniqueInput, 'id' | 'slug'>;
}
