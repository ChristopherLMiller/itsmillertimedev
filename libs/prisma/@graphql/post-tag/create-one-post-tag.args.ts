import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostTagCreateInput } from './post-tag-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePostTagArgs {

    @Field(() => PostTagCreateInput, {nullable:false})
    @Type(() => PostTagCreateInput)
    data!: PostTagCreateInput;
}
