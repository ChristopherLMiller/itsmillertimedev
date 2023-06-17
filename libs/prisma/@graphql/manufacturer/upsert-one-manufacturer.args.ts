import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManufacturerWhereUniqueInput } from './manufacturer-where-unique.input';
import { Type } from 'class-transformer';
import { ManufacturerCreateInput } from './manufacturer-create.input';
import { ManufacturerUpdateInput } from './manufacturer-update.input';

@ArgsType()
export class UpsertOneManufacturerArgs {

    @Field(() => ManufacturerWhereUniqueInput, {nullable:false})
    @Type(() => ManufacturerWhereUniqueInput)
    where!: ManufacturerWhereUniqueInput;

    @Field(() => ManufacturerCreateInput, {nullable:false})
    @Type(() => ManufacturerCreateInput)
    create!: ManufacturerCreateInput;

    @Field(() => ManufacturerUpdateInput, {nullable:false})
    @Type(() => ManufacturerUpdateInput)
    update!: ManufacturerUpdateInput;
}
