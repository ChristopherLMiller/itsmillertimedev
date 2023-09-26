import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManufacturerUpdateInput } from './manufacturer-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ManufacturerWhereUniqueInput } from './manufacturer-where-unique.input';

@ArgsType()
export class UpdateOneManufacturerArgs {

    @Field(() => ManufacturerUpdateInput, {nullable:false})
    @Type(() => ManufacturerUpdateInput)
    data!: ManufacturerUpdateInput;

    @Field(() => ManufacturerWhereUniqueInput, {nullable:false})
    @Type(() => ManufacturerWhereUniqueInput)
    where!: Prisma.AtLeast<ManufacturerWhereUniqueInput, 'id' | 'slug'>;
}
