import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClockifyTimerWhereInput } from './clockify-timer-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyClockifyTimerArgs {

    @Field(() => ClockifyTimerWhereInput, {nullable:true})
    @Type(() => ClockifyTimerWhereInput)
    where?: ClockifyTimerWhereInput;
}
