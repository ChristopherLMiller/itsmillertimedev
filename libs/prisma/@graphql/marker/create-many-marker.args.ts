import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkerCreateManyInput } from './marker-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyMarkerArgs {

    @Field(() => [MarkerCreateManyInput], {nullable:false})
    @Type(() => MarkerCreateManyInput)
    data!: Array<MarkerCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
