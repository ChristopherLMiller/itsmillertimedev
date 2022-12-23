import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostTagScalarWhereInput } from './post-tag-scalar-where.input';
import { Type } from 'class-transformer';
import { PostTagUpdateManyMutationInput } from './post-tag-update-many-mutation.input';

@InputType()
export class PostTagUpdateManyWithWhereWithoutPostsInput {

    @Field(() => PostTagScalarWhereInput, {nullable:false})
    @Type(() => PostTagScalarWhereInput)
    where!: PostTagScalarWhereInput;

    @Field(() => PostTagUpdateManyMutationInput, {nullable:false})
    @Type(() => PostTagUpdateManyMutationInput)
    data!: PostTagUpdateManyMutationInput;
}
