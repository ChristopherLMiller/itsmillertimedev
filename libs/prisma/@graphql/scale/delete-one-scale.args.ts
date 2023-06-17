import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScaleWhereUniqueInput } from './scale-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneScaleArgs {

    @Field(() => ScaleWhereUniqueInput, {nullable:false})
    @Type(() => ScaleWhereUniqueInput)
    where!: ScaleWhereUniqueInput;
}
