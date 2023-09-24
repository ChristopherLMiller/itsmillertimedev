import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlertWhereInput } from './alert-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAlertArgs {

    @Field(() => AlertWhereInput, {nullable:true})
    @Type(() => AlertWhereInput)
    where?: AlertWhereInput;
}
