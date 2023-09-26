import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutCategoryInput } from './post-create-without-category.input';

@InputType()
export class PostCreateOrConnectWithoutCategoryInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => PostCreateWithoutCategoryInput, {nullable:false})
    @Type(() => PostCreateWithoutCategoryInput)
    create!: PostCreateWithoutCategoryInput;
}
