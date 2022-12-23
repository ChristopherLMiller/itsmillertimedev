import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCategoryWhereInput } from './post-category-where.input';

@InputType()
export class PostCategoryRelationFilter {

    @Field(() => PostCategoryWhereInput, {nullable:true})
    is?: PostCategoryWhereInput;

    @Field(() => PostCategoryWhereInput, {nullable:true})
    isNot?: PostCategoryWhereInput;
}
