import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';
import { PostCreateInput } from './post-create.input';
import { PostUpdateInput } from './post-update.input';

@ArgsType()
export class UpsertOnePostArgs {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: PostWhereUniqueInput;

    @Field(() => PostCreateInput, {nullable:false})
    @Type(() => PostCreateInput)
    create!: PostCreateInput;

    @Field(() => PostUpdateInput, {nullable:false})
    @Type(() => PostUpdateInput)
    update!: PostUpdateInput;
}
