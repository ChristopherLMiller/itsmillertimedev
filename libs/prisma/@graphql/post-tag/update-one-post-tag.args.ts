import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostTagUpdateInput } from './post-tag-update.input';
import { Type } from 'class-transformer';
import { PostTagWhereUniqueInput } from './post-tag-where-unique.input';

@ArgsType()
export class UpdateOnePostTagArgs {

    @Field(() => PostTagUpdateInput, {nullable:false})
    @Type(() => PostTagUpdateInput)
    data!: PostTagUpdateInput;

    @Field(() => PostTagWhereUniqueInput, {nullable:false})
    @Type(() => PostTagWhereUniqueInput)
    where!: PostTagWhereUniqueInput;
}
