import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { PostListRelationFilter } from '../post/post-list-relation-filter.input';

@InputType()
export class PostCategoryWhereInput {

    @Field(() => [PostCategoryWhereInput], {nullable:true})
    AND?: Array<PostCategoryWhereInput>;

    @Field(() => [PostCategoryWhereInput], {nullable:true})
    OR?: Array<PostCategoryWhereInput>;

    @Field(() => [PostCategoryWhereInput], {nullable:true})
    NOT?: Array<PostCategoryWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => PostListRelationFilter, {nullable:true})
    posts?: PostListRelationFilter;
}
