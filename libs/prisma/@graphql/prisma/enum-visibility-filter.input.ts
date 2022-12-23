import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Visibility } from './visibility.enum';
import { NestedEnumVisibilityFilter } from './nested-enum-visibility-filter.input';

@InputType()
export class EnumVisibilityFilter {

    @Field(() => Visibility, {nullable:true})
    equals?: keyof typeof Visibility;

    @Field(() => [Visibility], {nullable:true})
    in?: Array<keyof typeof Visibility>;

    @Field(() => [Visibility], {nullable:true})
    notIn?: Array<keyof typeof Visibility>;

    @Field(() => NestedEnumVisibilityFilter, {nullable:true})
    not?: NestedEnumVisibilityFilter;
}
