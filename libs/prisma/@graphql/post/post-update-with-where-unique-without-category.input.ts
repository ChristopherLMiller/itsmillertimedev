import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutCategoryInput } from './post-update-without-category.input';

@InputType()
export class PostUpdateWithWhereUniqueWithoutCategoryInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: PostWhereUniqueInput;

    @Field(() => PostUpdateWithoutCategoryInput, {nullable:false})
    @Type(() => PostUpdateWithoutCategoryInput)
    data!: PostUpdateWithoutCategoryInput;
}
