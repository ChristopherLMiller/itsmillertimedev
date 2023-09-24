import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AlertWhereInput {

    @Field(() => [AlertWhereInput], {nullable:true})
    AND?: Array<AlertWhereInput>;

    @Field(() => [AlertWhereInput], {nullable:true})
    OR?: Array<AlertWhereInput>;

    @Field(() => [AlertWhereInput], {nullable:true})
    NOT?: Array<AlertWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    active?: BoolFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    validUntil?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startDate?: DateTimeFilter;

    @Field(() => IntFilter, {nullable:true})
    AlertAttempts?: IntFilter;
}
