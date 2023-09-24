import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlertWhereUniqueInput } from './alert-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAlertOrThrowArgs {

    @Field(() => AlertWhereUniqueInput, {nullable:false})
    @Type(() => AlertWhereUniqueInput)
    where!: AlertWhereUniqueInput;
}
