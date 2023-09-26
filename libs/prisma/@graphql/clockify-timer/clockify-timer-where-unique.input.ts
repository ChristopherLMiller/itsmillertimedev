import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ClockifyTimerWhereInput } from './clockify-timer-where.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class ClockifyTimerWhereUniqueInput {

    @Field(() => String, {nullable:true})
    projectId?: string;

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [ClockifyTimerWhereInput], {nullable:true})
    AND?: Array<ClockifyTimerWhereInput>;

    @Field(() => [ClockifyTimerWhereInput], {nullable:true})
    OR?: Array<ClockifyTimerWhereInput>;

    @Field(() => [ClockifyTimerWhereInput], {nullable:true})
    NOT?: Array<ClockifyTimerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    startTime?: StringFilter;
}
