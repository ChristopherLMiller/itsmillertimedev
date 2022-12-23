import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClockifyTimerWhereInput } from './clockify-timer-where.input';
import { Type } from 'class-transformer';
import { ClockifyTimerOrderByWithRelationInput } from './clockify-timer-order-by-with-relation.input';
import { ClockifyTimerWhereUniqueInput } from './clockify-timer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ClockifyTimerScalarFieldEnum } from './clockify-timer-scalar-field.enum';

@ArgsType()
export class FindFirstClockifyTimerOrThrowArgs {

    @Field(() => ClockifyTimerWhereInput, {nullable:true})
    @Type(() => ClockifyTimerWhereInput)
    where?: ClockifyTimerWhereInput;

    @Field(() => [ClockifyTimerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ClockifyTimerOrderByWithRelationInput>;

    @Field(() => ClockifyTimerWhereUniqueInput, {nullable:true})
    cursor?: ClockifyTimerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ClockifyTimerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ClockifyTimerScalarFieldEnum>;
}
