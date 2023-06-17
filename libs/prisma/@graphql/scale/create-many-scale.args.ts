import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScaleCreateManyInput } from './scale-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyScaleArgs {

    @Field(() => [ScaleCreateManyInput], {nullable:false})
    @Type(() => ScaleCreateManyInput)
    data!: Array<ScaleCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
