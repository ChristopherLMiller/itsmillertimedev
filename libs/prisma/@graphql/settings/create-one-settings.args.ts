import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingsCreateInput } from './settings-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneSettingsArgs {

    @Field(() => SettingsCreateInput, {nullable:false})
    @Type(() => SettingsCreateInput)
    data!: SettingsCreateInput;
}
