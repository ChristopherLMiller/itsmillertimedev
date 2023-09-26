import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ManufacturerWhereUniqueInput } from './manufacturer-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueManufacturerArgs {

    @Field(() => ManufacturerWhereUniqueInput, {nullable:false})
    @Type(() => ManufacturerWhereUniqueInput)
    where!: Prisma.AtLeast<ManufacturerWhereUniqueInput, 'id' | 'slug'>;
}
