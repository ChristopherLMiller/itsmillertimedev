import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateManyModelInput } from './image-create-many-model.input';
import { Type } from 'class-transformer';

@InputType()
export class ImageCreateManyModelInputEnvelope {

    @Field(() => [ImageCreateManyModelInput], {nullable:false})
    @Type(() => ImageCreateManyModelInput)
    data!: Array<ImageCreateManyModelInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
