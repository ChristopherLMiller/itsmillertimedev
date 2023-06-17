import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { ModelListRelationFilter } from '../model/model-list-relation-filter.input';

@InputType()
export class ScaleWhereInput {

    @Field(() => [ScaleWhereInput], {nullable:true})
    AND?: Array<ScaleWhereInput>;

    @Field(() => [ScaleWhereInput], {nullable:true})
    OR?: Array<ScaleWhereInput>;

    @Field(() => [ScaleWhereInput], {nullable:true})
    NOT?: Array<ScaleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => ModelListRelationFilter, {nullable:true})
    Model?: ModelListRelationFilter;
}
