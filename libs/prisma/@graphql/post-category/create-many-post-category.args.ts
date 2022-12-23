import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostCategoryCreateManyInput } from './post-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPostCategoryArgs {

    @Field(() => [PostCategoryCreateManyInput], {nullable:false})
    @Type(() => PostCategoryCreateManyInput)
    data!: Array<PostCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
