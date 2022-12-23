import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateWithoutTagsInput } from './post-create-without-tags.input';

@InputType()
export class PostCreateOrConnectWithoutTagsInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: PostWhereUniqueInput;

    @Field(() => PostCreateWithoutTagsInput, {nullable:false})
    @Type(() => PostCreateWithoutTagsInput)
    create!: PostCreateWithoutTagsInput;
}
