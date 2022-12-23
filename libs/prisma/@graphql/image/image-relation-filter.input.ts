import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereInput } from './image-where.input';

@InputType()
export class ImageRelationFilter {

    @Field(() => ImageWhereInput, {nullable:true})
    is?: ImageWhereInput;

    @Field(() => ImageWhereInput, {nullable:true})
    isNot?: ImageWhereInput;
}
