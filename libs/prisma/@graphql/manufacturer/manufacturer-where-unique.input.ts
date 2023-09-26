import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ManufacturerWhereInput } from './manufacturer-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ModelListRelationFilter } from '../model/model-list-relation-filter.input';

@InputType()
export class ManufacturerWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [ManufacturerWhereInput], {nullable:true})
    AND?: Array<ManufacturerWhereInput>;

    @Field(() => [ManufacturerWhereInput], {nullable:true})
    OR?: Array<ManufacturerWhereInput>;

    @Field(() => [ManufacturerWhereInput], {nullable:true})
    NOT?: Array<ManufacturerWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => ModelListRelationFilter, {nullable:true})
    Model?: ModelListRelationFilter;
}
