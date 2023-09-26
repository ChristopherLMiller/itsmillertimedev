import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ScaleWhereInput } from './scale-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ModelListRelationFilter } from '../model/model-list-relation-filter.input';

@InputType()
export class ScaleWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => [ScaleWhereInput], {nullable:true})
    AND?: Array<ScaleWhereInput>;

    @Field(() => [ScaleWhereInput], {nullable:true})
    OR?: Array<ScaleWhereInput>;

    @Field(() => [ScaleWhereInput], {nullable:true})
    NOT?: Array<ScaleWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => ModelListRelationFilter, {nullable:true})
    Model?: ModelListRelationFilter;
}
