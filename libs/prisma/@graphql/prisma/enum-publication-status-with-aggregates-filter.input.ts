import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationStatus } from './publication-status.enum';
import { NestedEnumPublicationStatusWithAggregatesFilter } from './nested-enum-publication-status-with-aggregates-filter.input';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPublicationStatusFilter } from './nested-enum-publication-status-filter.input';

@InputType()
export class EnumPublicationStatusWithAggregatesFilter {

    @Field(() => PublicationStatus, {nullable:true})
    equals?: keyof typeof PublicationStatus;

    @Field(() => [PublicationStatus], {nullable:true})
    in?: Array<keyof typeof PublicationStatus>;

    @Field(() => [PublicationStatus], {nullable:true})
    notIn?: Array<keyof typeof PublicationStatus>;

    @Field(() => NestedEnumPublicationStatusWithAggregatesFilter, {nullable:true})
    not?: NestedEnumPublicationStatusWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumPublicationStatusFilter, {nullable:true})
    _min?: NestedEnumPublicationStatusFilter;

    @Field(() => NestedEnumPublicationStatusFilter, {nullable:true})
    _max?: NestedEnumPublicationStatusFilter;
}
