import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkerCreateInput } from './marker-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneMarkerArgs {

    @Field(() => MarkerCreateInput, {nullable:false})
    @Type(() => MarkerCreateInput)
    data!: MarkerCreateInput;
}
