import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClockifyTimerWhereUniqueInput } from './clockify-timer-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneClockifyTimerArgs {

    @Field(() => ClockifyTimerWhereUniqueInput, {nullable:false})
    @Type(() => ClockifyTimerWhereUniqueInput)
    where!: ClockifyTimerWhereUniqueInput;
}
