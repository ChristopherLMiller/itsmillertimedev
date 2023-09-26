import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { SettingsWhereUniqueInput } from './settings-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSettingsOrThrowArgs {

    @Field(() => SettingsWhereUniqueInput, {nullable:false})
    @Type(() => SettingsWhereUniqueInput)
    where!: Prisma.AtLeast<SettingsWhereUniqueInput, 'id' | 'key'>;
}
