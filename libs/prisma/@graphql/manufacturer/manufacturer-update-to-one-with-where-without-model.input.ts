import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ManufacturerWhereInput } from './manufacturer-where.input';
import { Type } from 'class-transformer';
import { ManufacturerUpdateWithoutModelInput } from './manufacturer-update-without-model.input';

@InputType()
export class ManufacturerUpdateToOneWithWhereWithoutModelInput {

    @Field(() => ManufacturerWhereInput, {nullable:true})
    @Type(() => ManufacturerWhereInput)
    where?: ManufacturerWhereInput;

    @Field(() => ManufacturerUpdateWithoutModelInput, {nullable:false})
    @Type(() => ManufacturerUpdateWithoutModelInput)
    data!: ManufacturerUpdateWithoutModelInput;
}
