import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScaleUpdateManyMutationInput } from './scale-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ScaleWhereInput } from './scale-where.input';

@ArgsType()
export class UpdateManyScaleArgs {

    @Field(() => ScaleUpdateManyMutationInput, {nullable:false})
    @Type(() => ScaleUpdateManyMutationInput)
    data!: ScaleUpdateManyMutationInput;

    @Field(() => ScaleWhereInput, {nullable:true})
    @Type(() => ScaleWhereInput)
    where?: ScaleWhereInput;
}
