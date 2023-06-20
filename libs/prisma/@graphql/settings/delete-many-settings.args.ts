import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingsWhereInput } from './settings-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySettingsArgs {

    @Field(() => SettingsWhereInput, {nullable:true})
    @Type(() => SettingsWhereInput)
    where?: SettingsWhereInput;
}
