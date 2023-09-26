import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelWhereInput } from './model-where.input';
import { Type } from 'class-transformer';
import { ModelUpdateWithoutImagesInput } from './model-update-without-images.input';

@InputType()
export class ModelUpdateToOneWithWhereWithoutImagesInput {

    @Field(() => ModelWhereInput, {nullable:true})
    @Type(() => ModelWhereInput)
    where?: ModelWhereInput;

    @Field(() => ModelUpdateWithoutImagesInput, {nullable:false})
    @Type(() => ModelUpdateWithoutImagesInput)
    data!: ModelUpdateWithoutImagesInput;
}
