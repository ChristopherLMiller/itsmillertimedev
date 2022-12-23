import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutCategoryInput } from './post-create-without-category.input';

@InputType()
export class PostCreateOrConnectWithoutCategoryInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: PostWhereUniqueInput;

    @Field(() => PostCreateWithoutCategoryInput, {nullable:false})
    @Type(() => PostCreateWithoutCategoryInput)
    create!: PostCreateWithoutCategoryInput;
}
