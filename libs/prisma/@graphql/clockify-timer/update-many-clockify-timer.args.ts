import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClockifyTimerUpdateManyMutationInput } from './clockify-timer-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ClockifyTimerWhereInput } from './clockify-timer-where.input';

@ArgsType()
export class UpdateManyClockifyTimerArgs {

    @Field(() => ClockifyTimerUpdateManyMutationInput, {nullable:false})
    @Type(() => ClockifyTimerUpdateManyMutationInput)
    data!: ClockifyTimerUpdateManyMutationInput;

    @Field(() => ClockifyTimerWhereInput, {nullable:true})
    @Type(() => ClockifyTimerWhereInput)
    where?: ClockifyTimerWhereInput;
}
