import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostUpdateWithoutTagsInput } from './post-update-without-tags.input';
import { PostCreateWithoutTagsInput } from './post-create-without-tags.input';

@InputType()
export class PostUpsertWithWhereUniqueWithoutTagsInput {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: PostWhereUniqueInput;

    @Field(() => PostUpdateWithoutTagsInput, {nullable:false})
    @Type(() => PostUpdateWithoutTagsInput)
    update!: PostUpdateWithoutTagsInput;

    @Field(() => PostCreateWithoutTagsInput, {nullable:false})
    @Type(() => PostCreateWithoutTagsInput)
    create!: PostCreateWithoutTagsInput;
}
