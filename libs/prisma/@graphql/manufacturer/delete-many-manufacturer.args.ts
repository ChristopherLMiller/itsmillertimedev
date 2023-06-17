import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManufacturerWhereInput } from './manufacturer-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyManufacturerArgs {

    @Field(() => ManufacturerWhereInput, {nullable:true})
    @Type(() => ManufacturerWhereInput)
    where?: ManufacturerWhereInput;
}
