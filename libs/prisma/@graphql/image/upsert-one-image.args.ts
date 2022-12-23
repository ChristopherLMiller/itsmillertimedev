import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';
import { ImageCreateInput } from './image-create.input';
import { ImageUpdateInput } from './image-update.input';

@ArgsType()
export class UpsertOneImageArgs {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: ImageWhereUniqueInput;

    @Field(() => ImageCreateInput, {nullable:false})
    @Type(() => ImageCreateInput)
    create!: ImageCreateInput;

    @Field(() => ImageUpdateInput, {nullable:false})
    @Type(() => ImageUpdateInput)
    update!: ImageUpdateInput;
}
