import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManufacturerCreateWithoutModelInput } from './manufacturer-create-without-model.input';
import { Type } from 'class-transformer';
import { ManufacturerCreateOrConnectWithoutModelInput } from './manufacturer-create-or-connect-without-model.input';
import { ManufacturerWhereUniqueInput } from './manufacturer-where-unique.input';

@InputType()
export class ManufacturerCreateNestedOneWithoutModelInput {

    @Field(() => ManufacturerCreateWithoutModelInput, {nullable:true})
    @Type(() => ManufacturerCreateWithoutModelInput)
    create?: ManufacturerCreateWithoutModelInput;

    @Field(() => ManufacturerCreateOrConnectWithoutModelInput, {nullable:true})
    @Type(() => ManufacturerCreateOrConnectWithoutModelInput)
    connectOrCreate?: ManufacturerCreateOrConnectWithoutModelInput;

    @Field(() => ManufacturerWhereUniqueInput, {nullable:true})
    @Type(() => ManufacturerWhereUniqueInput)
    connect?: ManufacturerWhereUniqueInput;
}
