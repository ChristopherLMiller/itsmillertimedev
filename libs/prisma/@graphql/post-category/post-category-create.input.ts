import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateNestedManyWithoutCategoryInput } from '../post/post-create-nested-many-without-category.input';

@InputType()
export class PostCategoryCreateInput {

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => PostCreateNestedManyWithoutCategoryInput, {nullable:true})
    posts?: PostCreateNestedManyWithoutCategoryInput;
}
