import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScaleCreateInput } from './scale-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneScaleArgs {

    @Field(() => ScaleCreateInput, {nullable:false})
    @Type(() => ScaleCreateInput)
    data!: ScaleCreateInput;
}
