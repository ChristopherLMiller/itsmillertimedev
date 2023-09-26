import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClockifyTimerUpdateInput } from './clockify-timer-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ClockifyTimerWhereUniqueInput } from './clockify-timer-where-unique.input';

@ArgsType()
export class UpdateOneClockifyTimerArgs {

    @Field(() => ClockifyTimerUpdateInput, {nullable:false})
    @Type(() => ClockifyTimerUpdateInput)
    data!: ClockifyTimerUpdateInput;

    @Field(() => ClockifyTimerWhereUniqueInput, {nullable:false})
    @Type(() => ClockifyTimerWhereUniqueInput)
    where!: Prisma.AtLeast<ClockifyTimerWhereUniqueInput, 'projectId' | 'id'>;
}
