import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PostTagWhereInput } from './post-tag-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPostTagArgs {

    @Field(() => PostTagWhereInput, {nullable:true})
    @Type(() => PostTagWhereInput)
    where?: PostTagWhereInput;
}
