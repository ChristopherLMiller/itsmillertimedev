import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ManufacturerUpdateManyMutationInput } from './manufacturer-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ManufacturerWhereInput } from './manufacturer-where.input';

@ArgsType()
export class UpdateManyManufacturerArgs {

    @Field(() => ManufacturerUpdateManyMutationInput, {nullable:false})
    @Type(() => ManufacturerUpdateManyMutationInput)
    data!: ManufacturerUpdateManyMutationInput;

    @Field(() => ManufacturerWhereInput, {nullable:true})
    @Type(() => ManufacturerWhereInput)
    where?: ManufacturerWhereInput;
}
