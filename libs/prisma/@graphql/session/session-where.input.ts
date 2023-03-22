import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { Type } from 'class-transformer';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SessionWhereInput {

    @Field(() => [SessionWhereInput], {nullable:true})
    AND?: Array<SessionWhereInput>;

    @Field(() => [SessionWhereInput], {nullable:true})
    OR?: Array<SessionWhereInput>;

    @Field(() => [SessionWhereInput], {nullable:true})
    NOT?: Array<SessionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    sid?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    @Type(() => StringFilter)
    data?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: DateTimeFilter;
}
