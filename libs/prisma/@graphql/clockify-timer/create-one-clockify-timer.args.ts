import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClockifyTimerCreateInput } from './clockify-timer-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneClockifyTimerArgs {

    @Field(() => ClockifyTimerCreateInput, {nullable:false})
    @Type(() => ClockifyTimerCreateInput)
    data!: ClockifyTimerCreateInput;
}
