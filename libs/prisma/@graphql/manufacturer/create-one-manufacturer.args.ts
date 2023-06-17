import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManufacturerCreateInput } from './manufacturer-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneManufacturerArgs {

    @Field(() => ManufacturerCreateInput, {nullable:false})
    @Type(() => ManufacturerCreateInput)
    data!: ManufacturerCreateInput;
}
