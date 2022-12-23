import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PublicationStatus } from './publication-status.enum';

@InputType()
export class EnumPublicationStatusFieldUpdateOperationsInput {

    @Field(() => PublicationStatus, {nullable:true})
    set?: keyof typeof PublicationStatus;
}
