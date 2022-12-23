import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkerWhereUniqueInput } from './marker-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneMarkerArgs {

    @Field(() => MarkerWhereUniqueInput, {nullable:false})
    @Type(() => MarkerWhereUniqueInput)
    where!: MarkerWhereUniqueInput;
}
