import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostTagWhereUniqueInput } from './post-tag-where-unique.input';
import { Type } from 'class-transformer';
import { PostTagCreateInput } from './post-tag-create.input';
import { PostTagUpdateInput } from './post-tag-update.input';

@ArgsType()
export class UpsertOnePostTagArgs {

    @Field(() => PostTagWhereUniqueInput, {nullable:false})
    @Type(() => PostTagWhereUniqueInput)
    where!: PostTagWhereUniqueInput;

    @Field(() => PostTagCreateInput, {nullable:false})
    @Type(() => PostTagCreateInput)
    create!: PostTagCreateInput;

    @Field(() => PostTagUpdateInput, {nullable:false})
    @Type(() => PostTagUpdateInput)
    update!: PostTagUpdateInput;
}
