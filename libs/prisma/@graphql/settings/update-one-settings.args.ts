import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingsUpdateInput } from './settings-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { SettingsWhereUniqueInput } from './settings-where-unique.input';

@ArgsType()
export class UpdateOneSettingsArgs {

    @Field(() => SettingsUpdateInput, {nullable:false})
    @Type(() => SettingsUpdateInput)
    data!: SettingsUpdateInput;

    @Field(() => SettingsWhereUniqueInput, {nullable:false})
    @Type(() => SettingsWhereUniqueInput)
    where!: Prisma.AtLeast<SettingsWhereUniqueInput, 'id' | 'key'>;
}
