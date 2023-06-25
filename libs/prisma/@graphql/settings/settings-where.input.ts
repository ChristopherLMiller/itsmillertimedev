import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonFilter } from '../prisma/json-filter.input';

@InputType()
export class SettingsWhereInput {

    @Field(() => [SettingsWhereInput], {nullable:true})
    AND?: Array<SettingsWhereInput>;

    @Field(() => [SettingsWhereInput], {nullable:true})
    OR?: Array<SettingsWhereInput>;

    @Field(() => [SettingsWhereInput], {nullable:true})
    NOT?: Array<SettingsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    key?: StringFilter;

    @Field(() => JsonFilter, {nullable:true})
    value?: JsonFilter;
}
