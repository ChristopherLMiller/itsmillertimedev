import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryCategoryWhereUniqueInput } from './gallery-category-where-unique.input';
import { Type } from 'class-transformer';
import { GalleryCategoryCreateInput } from './gallery-category-create.input';
import { GalleryCategoryUpdateInput } from './gallery-category-update.input';

@ArgsType()
export class UpsertOneGalleryCategoryArgs {

    @Field(() => GalleryCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GalleryCategoryWhereUniqueInput)
    where!: GalleryCategoryWhereUniqueInput;

    @Field(() => GalleryCategoryCreateInput, {nullable:false})
    @Type(() => GalleryCategoryCreateInput)
    create!: GalleryCategoryCreateInput;

    @Field(() => GalleryCategoryUpdateInput, {nullable:false})
    @Type(() => GalleryCategoryUpdateInput)
    update!: GalleryCategoryUpdateInput;
}
