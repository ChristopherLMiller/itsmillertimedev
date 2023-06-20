import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingsCreateManyInput } from './settings-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySettingsArgs {

    @Field(() => [SettingsCreateManyInput], {nullable:false})
    @Type(() => SettingsCreateManyInput)
    data!: Array<SettingsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
