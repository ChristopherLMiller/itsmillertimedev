import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkerWhereInput } from './marker-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyMarkerArgs {

    @Field(() => MarkerWhereInput, {nullable:true})
    @Type(() => MarkerWhereInput)
    where?: MarkerWhereInput;
}
