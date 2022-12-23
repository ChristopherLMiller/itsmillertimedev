import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Visibility } from './visibility.enum';

@InputType()
export class EnumVisibilityFieldUpdateOperationsInput {

    @Field(() => Visibility, {nullable:true})
    set?: keyof typeof Visibility;
}
