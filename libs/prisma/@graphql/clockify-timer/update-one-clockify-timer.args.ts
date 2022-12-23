import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClockifyTimerUpdateInput } from './clockify-timer-update.input';
import { Type } from 'class-transformer';
import { ClockifyTimerWhereUniqueInput } from './clockify-timer-where-unique.input';

@ArgsType()
export class UpdateOneClockifyTimerArgs {

    @Field(() => ClockifyTimerUpdateInput, {nullable:false})
    @Type(() => ClockifyTimerUpdateInput)
    data!: ClockifyTimerUpdateInput;

    @Field(() => ClockifyTimerWhereUniqueInput, {nullable:false})
    @Type(() => ClockifyTimerWhereUniqueInput)
    where!: ClockifyTimerWhereUniqueInput;
}
