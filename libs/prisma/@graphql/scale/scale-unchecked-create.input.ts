import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { ModelUncheckedCreateNestedManyWithoutScaleInput } from '../model/model-unchecked-create-nested-many-without-scale.input';

@InputType()
export class ScaleUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => ModelUncheckedCreateNestedManyWithoutScaleInput, {nullable:true})
    Model?: ModelUncheckedCreateNestedManyWithoutScaleInput;
}
