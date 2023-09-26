import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ManufacturerWhereUniqueInput } from './manufacturer-where-unique.input';
import { Type } from 'class-transformer';
import { ManufacturerCreateWithoutModelInput } from './manufacturer-create-without-model.input';

@InputType()
export class ManufacturerCreateOrConnectWithoutModelInput {

    @Field(() => ManufacturerWhereUniqueInput, {nullable:false})
    @Type(() => ManufacturerWhereUniqueInput)
    where!: Prisma.AtLeast<ManufacturerWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ManufacturerCreateWithoutModelInput, {nullable:false})
    @Type(() => ManufacturerCreateWithoutModelInput)
    create!: ManufacturerCreateWithoutModelInput;
}
