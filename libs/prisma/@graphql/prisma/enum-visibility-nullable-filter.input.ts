import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Visibility } from './visibility.enum';
import { NestedEnumVisibilityNullableFilter } from './nested-enum-visibility-nullable-filter.input';

@InputType()
export class EnumVisibilityNullableFilter {

    @Field(() => Visibility, {nullable:true})
    equals?: keyof typeof Visibility;

    @Field(() => [Visibility], {nullable:true})
    in?: Array<keyof typeof Visibility>;

    @Field(() => [Visibility], {nullable:true})
    notIn?: Array<keyof typeof Visibility>;

    @Field(() => NestedEnumVisibilityNullableFilter, {nullable:true})
    not?: NestedEnumVisibilityNullableFilter;
}
