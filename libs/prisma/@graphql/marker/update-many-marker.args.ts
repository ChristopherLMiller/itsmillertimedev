import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkerUpdateManyMutationInput } from './marker-update-many-mutation.input';
import { Type } from 'class-transformer';
import { MarkerWhereInput } from './marker-where.input';

@ArgsType()
export class UpdateManyMarkerArgs {

    @Field(() => MarkerUpdateManyMutationInput, {nullable:false})
    @Type(() => MarkerUpdateManyMutationInput)
    data!: MarkerUpdateManyMutationInput;

    @Field(() => MarkerWhereInput, {nullable:true})
    @Type(() => MarkerWhereInput)
    where?: MarkerWhereInput;
}
