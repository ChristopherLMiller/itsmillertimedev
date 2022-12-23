import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Visibility } from './visibility.enum';
import { NestedEnumVisibilityNullableWithAggregatesFilter } from './nested-enum-visibility-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumVisibilityNullableFilter } from './nested-enum-visibility-nullable-filter.input';

@InputType()
export class EnumVisibilityNullableWithAggregatesFilter {

    @Field(() => Visibility, {nullable:true})
    equals?: keyof typeof Visibility;

    @Field(() => [Visibility], {nullable:true})
    in?: Array<keyof typeof Visibility>;

    @Field(() => [Visibility], {nullable:true})
    notIn?: Array<keyof typeof Visibility>;

    @Field(() => NestedEnumVisibilityNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumVisibilityNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumVisibilityNullableFilter, {nullable:true})
    _min?: NestedEnumVisibilityNullableFilter;

    @Field(() => NestedEnumVisibilityNullableFilter, {nullable:true})
    _max?: NestedEnumVisibilityNullableFilter;
}
