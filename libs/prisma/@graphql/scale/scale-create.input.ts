import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelCreateNestedManyWithoutScaleInput } from '../model/model-create-nested-many-without-scale.input';

@InputType()
export class ScaleCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => ModelCreateNestedManyWithoutScaleInput, {nullable:true})
    Model?: ModelCreateNestedManyWithoutScaleInput;
}
