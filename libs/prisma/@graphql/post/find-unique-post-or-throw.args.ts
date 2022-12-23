import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePostOrThrowArgs {

    @Field(() => PostWhereUniqueInput, {nullable:false})
    @Type(() => PostWhereUniqueInput)
    where!: PostWhereUniqueInput;
}
