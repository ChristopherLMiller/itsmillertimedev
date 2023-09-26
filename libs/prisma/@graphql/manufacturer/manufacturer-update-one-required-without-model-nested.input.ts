import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManufacturerCreateWithoutModelInput } from './manufacturer-create-without-model.input';
import { Type } from 'class-transformer';
import { ManufacturerCreateOrConnectWithoutModelInput } from './manufacturer-create-or-connect-without-model.input';
import { ManufacturerUpsertWithoutModelInput } from './manufacturer-upsert-without-model.input';
import { Prisma } from '@prisma/client';
import { ManufacturerWhereUniqueInput } from './manufacturer-where-unique.input';
import { ManufacturerUpdateToOneWithWhereWithoutModelInput } from './manufacturer-update-to-one-with-where-without-model.input';

@InputType()
export class ManufacturerUpdateOneRequiredWithoutModelNestedInput {

    @Field(() => ManufacturerCreateWithoutModelInput, {nullable:true})
    @Type(() => ManufacturerCreateWithoutModelInput)
    create?: ManufacturerCreateWithoutModelInput;

    @Field(() => ManufacturerCreateOrConnectWithoutModelInput, {nullable:true})
    @Type(() => ManufacturerCreateOrConnectWithoutModelInput)
    connectOrCreate?: ManufacturerCreateOrConnectWithoutModelInput;

    @Field(() => ManufacturerUpsertWithoutModelInput, {nullable:true})
    @Type(() => ManufacturerUpsertWithoutModelInput)
    upsert?: ManufacturerUpsertWithoutModelInput;

    @Field(() => ManufacturerWhereUniqueInput, {nullable:true})
    @Type(() => ManufacturerWhereUniqueInput)
    connect?: Prisma.AtLeast<ManufacturerWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ManufacturerUpdateToOneWithWhereWithoutModelInput, {nullable:true})
    @Type(() => ManufacturerUpdateToOneWithWhereWithoutModelInput)
    update?: ManufacturerUpdateToOneWithWhereWithoutModelInput;
}
