import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkerWhereUniqueInput } from './marker-where-unique.input';
import { Type } from 'class-transformer';
import { MarkerCreateInput } from './marker-create.input';
import { MarkerUpdateInput } from './marker-update.input';

@ArgsType()
export class UpsertOneMarkerArgs {

    @Field(() => MarkerWhereUniqueInput, {nullable:false})
    @Type(() => MarkerWhereUniqueInput)
    where!: MarkerWhereUniqueInput;

    @Field(() => MarkerCreateInput, {nullable:false})
    @Type(() => MarkerCreateInput)
    create!: MarkerCreateInput;

    @Field(() => MarkerUpdateInput, {nullable:false})
    @Type(() => MarkerUpdateInput)
    update!: MarkerUpdateInput;
}
