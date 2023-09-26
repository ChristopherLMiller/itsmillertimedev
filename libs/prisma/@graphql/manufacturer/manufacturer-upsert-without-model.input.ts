import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManufacturerUpdateWithoutModelInput } from './manufacturer-update-without-model.input';
import { Type } from 'class-transformer';
import { ManufacturerCreateWithoutModelInput } from './manufacturer-create-without-model.input';
import { ManufacturerWhereInput } from './manufacturer-where.input';

@InputType()
export class ManufacturerUpsertWithoutModelInput {

    @Field(() => ManufacturerUpdateWithoutModelInput, {nullable:false})
    @Type(() => ManufacturerUpdateWithoutModelInput)
    update!: ManufacturerUpdateWithoutModelInput;

    @Field(() => ManufacturerCreateWithoutModelInput, {nullable:false})
    @Type(() => ManufacturerCreateWithoutModelInput)
    create!: ManufacturerCreateWithoutModelInput;

    @Field(() => ManufacturerWhereInput, {nullable:true})
    @Type(() => ManufacturerWhereInput)
    where?: ManufacturerWhereInput;
}
