import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScaleWhereInput } from './scale-where.input';
import { Type } from 'class-transformer';
import { ScaleUpdateWithoutModelInput } from './scale-update-without-model.input';

@InputType()
export class ScaleUpdateToOneWithWhereWithoutModelInput {

    @Field(() => ScaleWhereInput, {nullable:true})
    @Type(() => ScaleWhereInput)
    where?: ScaleWhereInput;

    @Field(() => ScaleUpdateWithoutModelInput, {nullable:false})
    @Type(() => ScaleUpdateWithoutModelInput)
    data!: ScaleUpdateWithoutModelInput;
}
