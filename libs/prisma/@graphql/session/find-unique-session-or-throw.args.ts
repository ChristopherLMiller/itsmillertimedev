import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionWhereUniqueInput } from './session-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSessionOrThrowArgs {

    @Field(() => SessionWhereUniqueInput, {nullable:false})
    @Type(() => SessionWhereUniqueInput)
    where!: SessionWhereUniqueInput;
}
