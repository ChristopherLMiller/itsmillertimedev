import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SettingsWhereInput } from './settings-where.input';
import { Type } from 'class-transformer';
import { SettingsOrderByWithRelationInput } from './settings-order-by-with-relation.input';
import { SettingsWhereUniqueInput } from './settings-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SettingsScalarFieldEnum } from './settings-scalar-field.enum';

@ArgsType()
export class FindFirstSettingsArgs {

    @Field(() => SettingsWhereInput, {nullable:true})
    @Type(() => SettingsWhereInput)
    where?: SettingsWhereInput;

    @Field(() => [SettingsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SettingsOrderByWithRelationInput>;

    @Field(() => SettingsWhereUniqueInput, {nullable:true})
    cursor?: SettingsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SettingsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SettingsScalarFieldEnum>;
}
