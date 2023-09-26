import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutCategoryInput } from './post-update-without-category.input';
import { PostCreateWithoutCategoryInput } from './post-create-without-category.input';

@InputType()
export class PostUpsertWithWhereUniqueWithoutCategoryInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => PostUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => PostUpdateWithoutCategoryInput)
    update!: PostUpdateWithoutCategoryInput;

    @Field(() => PostCreateWithoutCategoryInput, {nullable:false})
    @Type(() => PostCreateWithoutCategoryInput)
    create!: PostCreateWithoutCategoryInput;
}
