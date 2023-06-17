import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManufacturerWhereUniqueInput } from './manufacturer-where-unique.input';
import { Type } from 'class-transformer';
import { ManufacturerCreateWithoutModelInput } from './manufacturer-create-without-model.input';

@InputType()
export class ManufacturerCreateOrConnectWithoutModelInput {

    @Field(() => ManufacturerWhereUniqueInput, {nullable:false})
    @Type(() => ManufacturerWhereUniqueInput)
    where!: ManufacturerWhereUniqueInput;

    @Field(() => ManufacturerCreateWithoutModelInput, {nullable:false})
    @Type(() => ManufacturerCreateWithoutModelInput)
    create!: ManufacturerCreateWithoutModelInput;
}
