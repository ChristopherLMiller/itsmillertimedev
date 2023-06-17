import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueModelOrThrowArgs {

    @Field(() => ModelWhereUniqueInput, {nullable:false})
    @Type(() => ModelWhereUniqueInput)
    where!: ModelWhereUniqueInput;
}
