import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelCreateNestedOneWithoutTagsInput } from '../model/model-create-nested-one-without-tags.input';

@InputType()
export class ModelTagsCreateInput {

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => ModelCreateNestedOneWithoutTagsInput, {nullable:true})
    Model?: ModelCreateNestedOneWithoutTagsInput;
}
