import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostCategoryCreateInput } from './post-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePostCategoryArgs {

    @Field(() => PostCategoryCreateInput, {nullable:false})
    @Type(() => PostCategoryCreateInput)
    data!: PostCategoryCreateInput;
}
