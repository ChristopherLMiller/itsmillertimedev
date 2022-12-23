import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class ClockifyTimerWhereInput {

    @Field(() => [ClockifyTimerWhereInput], {nullable:true})
    AND?: Array<ClockifyTimerWhereInput>;

    @Field(() => [ClockifyTimerWhereInput], {nullable:true})
    OR?: Array<ClockifyTimerWhereInput>;

    @Field(() => [ClockifyTimerWhereInput], {nullable:true})
    NOT?: Array<ClockifyTimerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    projectId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    startTime?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;
}
