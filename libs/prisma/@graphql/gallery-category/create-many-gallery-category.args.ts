import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryCategoryCreateManyInput } from './gallery-category-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyGalleryCategoryArgs {

    @Field(() => [GalleryCategoryCreateManyInput], {nullable:false})
    @Type(() => GalleryCategoryCreateManyInput)
    data!: Array<GalleryCategoryCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
