import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClockifyTimerWhereUniqueInput } from './clockify-timer-where-unique.input';
import { Type } from 'class-transformer';
import { ClockifyTimerCreateInput } from './clockify-timer-create.input';
import { ClockifyTimerUpdateInput } from './clockify-timer-update.input';

@ArgsType()
export class UpsertOneClockifyTimerArgs {

    @Field(() => ClockifyTimerWhereUniqueInput, {nullable:false})
    @Type(() => ClockifyTimerWhereUniqueInput)
    where!: Prisma.AtLeast<ClockifyTimerWhereUniqueInput, 'projectId' | 'id'>;

    @Field(() => ClockifyTimerCreateInput, {nullable:false})
    @Type(() => ClockifyTimerCreateInput)
    create!: ClockifyTimerCreateInput;

    @Field(() => ClockifyTimerUpdateInput, {nullable:false})
    @Type(() => ClockifyTimerUpdateInput)
    update!: ClockifyTimerUpdateInput;
}
