import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingsWhereUniqueInput } from './settings-where-unique.input';
import { Type } from 'class-transformer';
import { SettingsCreateInput } from './settings-create.input';
import { SettingsUpdateInput } from './settings-update.input';

@ArgsType()
export class UpsertOneSettingsArgs {

    @Field(() => SettingsWhereUniqueInput, {nullable:false})
    @Type(() => SettingsWhereUniqueInput)
    where!: SettingsWhereUniqueInput;

    @Field(() => SettingsCreateInput, {nullable:false})
    @Type(() => SettingsCreateInput)
    create!: SettingsCreateInput;

    @Field(() => SettingsUpdateInput, {nullable:false})
    @Type(() => SettingsUpdateInput)
    update!: SettingsUpdateInput;
}
