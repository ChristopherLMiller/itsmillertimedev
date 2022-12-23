import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationStatus } from './publication-status.enum';
import { NestedEnumPublicationStatusFilter } from './nested-enum-publication-status-filter.input';

@InputType()
export class EnumPublicationStatusFilter {

    @Field(() => PublicationStatus, {nullable:true})
    equals?: keyof typeof PublicationStatus;

    @Field(() => [PublicationStatus], {nullable:true})
    in?: Array<keyof typeof PublicationStatus>;

    @Field(() => [PublicationStatus], {nullable:true})
    notIn?: Array<keyof typeof PublicationStatus>;

    @Field(() => NestedEnumPublicationStatusFilter, {nullable:true})
    not?: NestedEnumPublicationStatusFilter;
}
