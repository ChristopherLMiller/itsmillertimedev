import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostCategoryWhereUniqueInput } from './post-category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePostCategoryOrThrowArgs {

    @Field(() => PostCategoryWhereUniqueInput, {nullable:false})
    @Type(() => PostCategoryWhereUniqueInput)
    where!: PostCategoryWhereUniqueInput;
}
