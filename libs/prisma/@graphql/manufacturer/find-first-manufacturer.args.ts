import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManufacturerWhereInput } from './manufacturer-where.input';
import { Type } from 'class-transformer';
import { ManufacturerOrderByWithRelationInput } from './manufacturer-order-by-with-relation.input';
import { ManufacturerWhereUniqueInput } from './manufacturer-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ManufacturerScalarFieldEnum } from './manufacturer-scalar-field.enum';

@ArgsType()
export class FindFirstManufacturerArgs {

    @Field(() => ManufacturerWhereInput, {nullable:true})
    @Type(() => ManufacturerWhereInput)
    where?: ManufacturerWhereInput;

    @Field(() => [ManufacturerOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ManufacturerOrderByWithRelationInput>;

    @Field(() => ManufacturerWhereUniqueInput, {nullable:true})
    cursor?: ManufacturerWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ManufacturerScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ManufacturerScalarFieldEnum>;
}
