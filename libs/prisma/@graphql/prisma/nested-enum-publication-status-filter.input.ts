import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationStatus } from './publication-status.enum';

@InputType()
export class NestedEnumPublicationStatusFilter {

    @Field(() => PublicationStatus, {nullable:true})
    equals?: keyof typeof PublicationStatus;

    @Field(() => [PublicationStatus], {nullable:true})
    in?: Array<keyof typeof PublicationStatus>;

    @Field(() => [PublicationStatus], {nullable:true})
    notIn?: Array<keyof typeof PublicationStatus>;

    @Field(() => NestedEnumPublicationStatusFilter, {nullable:true})
    not?: NestedEnumPublicationStatusFilter;
}
