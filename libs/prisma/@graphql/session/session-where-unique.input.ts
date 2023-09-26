import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionWhereInput } from './session-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Type } from 'class-transformer';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SessionWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    sid?: string;

    @Field(() => [SessionWhereInput], {nullable:true})
    AND?: Array<SessionWhereInput>;

    @Field(() => [SessionWhereInput], {nullable:true})
    OR?: Array<SessionWhereInput>;

    @Field(() => [SessionWhereInput], {nullable:true})
    NOT?: Array<SessionWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    @Type(() => StringFilter)
    data?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    expiresAt?: DateTimeFilter;
}
