import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManufacturerWhereUniqueInput } from './manufacturer-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneManufacturerArgs {

    @Field(() => ManufacturerWhereUniqueInput, {nullable:false})
    @Type(() => ManufacturerWhereUniqueInput)
    where!: ManufacturerWhereUniqueInput;
}
