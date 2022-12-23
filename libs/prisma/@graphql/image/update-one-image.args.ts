import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImageUpdateInput } from './image-update.input';
import { Type } from 'class-transformer';
import { ImageWhereUniqueInput } from './image-where-unique.input';

@ArgsType()
export class UpdateOneImageArgs {

    @Field(() => ImageUpdateInput, {nullable:false})
    @Type(() => ImageUpdateInput)
    data!: ImageUpdateInput;

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: ImageWhereUniqueInput;
}
