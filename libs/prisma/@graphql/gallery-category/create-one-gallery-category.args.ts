import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryCategoryCreateInput } from './gallery-category-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneGalleryCategoryArgs {

    @Field(() => GalleryCategoryCreateInput, {nullable:false})
    @Type(() => GalleryCategoryCreateInput)
    data!: GalleryCategoryCreateInput;
}
