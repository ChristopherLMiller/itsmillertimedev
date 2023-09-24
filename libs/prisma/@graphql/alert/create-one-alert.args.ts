import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlertCreateInput } from './alert-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAlertArgs {

    @Field(() => AlertCreateInput, {nullable:false})
    @Type(() => AlertCreateInput)
    data!: AlertCreateInput;
}
