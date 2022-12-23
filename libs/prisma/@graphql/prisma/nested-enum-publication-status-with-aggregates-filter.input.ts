import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationStatus } from './publication-status.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumPublicationStatusFilter } from './nested-enum-publication-status-filter.input';

@InputType()
export class NestedEnumPublicationStatusWithAggregatesFilter {

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
