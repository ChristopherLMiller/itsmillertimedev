import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManufacturerWhereInput } from './manufacturer-where.input';

@InputType()
export class ManufacturerRelationFilter {

    @Field(() => ManufacturerWhereInput, {nullable:true})
    is?: ManufacturerWhereInput;

    @Field(() => ManufacturerWhereInput, {nullable:true})
    isNot?: ManufacturerWhereInput;
}
