import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelCreateManyManufacturerInput } from './model-create-many-manufacturer.input';
import { Type } from 'class-transformer';

@InputType()
export class ModelCreateManyManufacturerInputEnvelope {

    @Field(() => [ModelCreateManyManufacturerInput], {nullable:false})
    @Type(() => ModelCreateManyManufacturerInput)
    data!: Array<ModelCreateManyManufacturerInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
