import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScaleWhereInput } from './scale-where.input';

@InputType()
export class ScaleRelationFilter {

    @Field(() => ScaleWhereInput, {nullable:true})
    is?: ScaleWhereInput;

    @Field(() => ScaleWhereInput, {nullable:true})
    isNot?: ScaleWhereInput;
}
