import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Visibility } from './visibility.enum';

@InputType()
export class NullableEnumVisibilityFieldUpdateOperationsInput {

    @Field(() => Visibility, {nullable:true})
    set?: keyof typeof Visibility;
}
