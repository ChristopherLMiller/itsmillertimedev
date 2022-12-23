import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Visibility } from './visibility.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumVisibilityFilter } from './nested-enum-visibility-filter.input';

@InputType()
export class NestedEnumVisibilityWithAggregatesFilter {

    @Field(() => Visibility, {nullable:true})
    equals?: keyof typeof Visibility;

    @Field(() => [Visibility], {nullable:true})
    in?: Array<keyof typeof Visibility>;

    @Field(() => [Visibility], {nullable:true})
    notIn?: Array<keyof typeof Visibility>;

    @Field(() => NestedEnumVisibilityWithAggregatesFilter, {nullable:true})
    not?: NestedEnumVisibilityWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumVisibilityFilter, {nullable:true})
    _min?: NestedEnumVisibilityFilter;

    @Field(() => NestedEnumVisibilityFilter, {nullable:true})
    _max?: NestedEnumVisibilityFilter;
}
