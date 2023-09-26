import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ScaleUpdateWithoutModelInput } from './scale-update-without-model.input';
import { Type } from 'class-transformer';
import { ScaleCreateWithoutModelInput } from './scale-create-without-model.input';
import { ScaleWhereInput } from './scale-where.input';

@InputType()
export class ScaleUpsertWithoutModelInput {

    @Field(() => ScaleUpdateWithoutModelInput, {nullable:false})
    @Type(() => ScaleUpdateWithoutModelInput)
    update!: ScaleUpdateWithoutModelInput;

    @Field(() => ScaleCreateWithoutModelInput, {nullable:false})
    @Type(() => ScaleCreateWithoutModelInput)
    create!: ScaleCreateWithoutModelInput;

    @Field(() => ScaleWhereInput, {nullable:true})
    @Type(() => ScaleWhereInput)
    where?: ScaleWhereInput;
}
