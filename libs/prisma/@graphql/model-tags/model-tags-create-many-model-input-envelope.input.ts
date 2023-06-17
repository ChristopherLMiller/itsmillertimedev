import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ModelTagsCreateManyModelInput } from './model-tags-create-many-model.input';
import { Type } from 'class-transformer';

@InputType()
export class ModelTagsCreateManyModelInputEnvelope {

    @Field(() => [ModelTagsCreateManyModelInput], {nullable:false})
    @Type(() => ModelTagsCreateManyModelInput)
    data!: Array<ModelTagsCreateManyModelInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
