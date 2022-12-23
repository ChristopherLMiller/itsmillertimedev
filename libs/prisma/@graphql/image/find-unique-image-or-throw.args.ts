import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ImageWhereUniqueInput } from './image-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueImageOrThrowArgs {

    @Field(() => ImageWhereUniqueInput, {nullable:false})
    @Type(() => ImageWhereUniqueInput)
    where!: ImageWhereUniqueInput;
}
