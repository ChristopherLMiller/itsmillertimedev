import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ClockifyTimerCreateManyInput } from './clockify-timer-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyClockifyTimerArgs {

    @Field(() => [ClockifyTimerCreateManyInput], {nullable:false})
    @Type(() => ClockifyTimerCreateManyInput)
    data!: Array<ClockifyTimerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
