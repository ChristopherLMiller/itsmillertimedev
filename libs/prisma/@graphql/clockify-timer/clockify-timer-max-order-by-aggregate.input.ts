import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class ClockifyTimerMaxOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    projectId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    startTime?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}
