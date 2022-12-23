import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostUpdateInput } from './post-update.input';
import { Type } from 'class-transformer';
import { PostWhereUniqueInput } from './post-where-unique.input';

@ArgsType()
export class UpdateOnePostArgs {

    @Field(() => PostUpdateInput, {nullable:false})
    @Type(() => PostUpdateInput)
    data!: PostUpdateInput;

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: PostWhereUniqueInput;
}
