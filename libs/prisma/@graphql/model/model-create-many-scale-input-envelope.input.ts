import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelCreateManyScaleInput } from './model-create-many-scale.input';
import { Type } from 'class-transformer';

@InputType()
export class ModelCreateManyScaleInputEnvelope {

    @Field(() => [ModelCreateManyScaleInput], {nullable:false})
    @Type(() => ModelCreateManyScaleInput)
    data!: Array<ModelCreateManyScaleInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
