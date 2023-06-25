import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingsUpdateManyMutationInput } from './settings-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SettingsWhereInput } from './settings-where.input';

@ArgsType()
export class UpdateManySettingsArgs {

    @Field(() => SettingsUpdateManyMutationInput, {nullable:false})
    @Type(() => SettingsUpdateManyMutationInput)
    data!: SettingsUpdateManyMutationInput;

    @Field(() => SettingsWhereInput, {nullable:true})
    @Type(() => SettingsWhereInput)
    where?: SettingsWhereInput;
}
