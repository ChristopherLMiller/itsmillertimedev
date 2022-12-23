import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { PostUncheckedCreateNestedManyWithoutCategoryInput } from '../post/post-unchecked-create-nested-many-without-category.input';

@InputType()
export class PostCategoryUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => PostUncheckedCreateNestedManyWithoutCategoryInput, {nullable:true})
    posts?: PostUncheckedCreateNestedManyWithoutCategoryInput;
}
