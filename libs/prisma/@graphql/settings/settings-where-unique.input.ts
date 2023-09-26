import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SettingsWhereInput } from './settings-where.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class SettingsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    key?: string;

    @Field(() => [SettingsWhereInput], {nullable:true})
    AND?: Array<SettingsWhereInput>;

    @Field(() => [SettingsWhereInput], {nullable:true})
    OR?: Array<SettingsWhereInput>;

    @Field(() => [SettingsWhereInput], {nullable:true})
    NOT?: Array<SettingsWhereInput>;

    @Field(() => JsonFilter, {nullable:true})
    value?: JsonFilter;
}
