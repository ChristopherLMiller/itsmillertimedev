import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class PostTagScalarWhereInput {

    @Field(() => [PostTagScalarWhereInput], {nullable:true})
    AND?: Array<PostTagScalarWhereInput>;

    @Field(() => [PostTagScalarWhereInput], {nullable:true})
    OR?: Array<PostTagScalarWhereInput>;

    @Field(() => [PostTagScalarWhereInput], {nullable:true})
    NOT?: Array<PostTagScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    postId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;
}
