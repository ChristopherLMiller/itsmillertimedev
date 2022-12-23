import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryCategoryUpdateInput } from './gallery-category-update.input';
import { Type } from 'class-transformer';
import { GalleryCategoryWhereUniqueInput } from './gallery-category-where-unique.input';

@ArgsType()
export class UpdateOneGalleryCategoryArgs {

    @Field(() => GalleryCategoryUpdateInput, {nullable:false})
    @Type(() => GalleryCategoryUpdateInput)
    data!: GalleryCategoryUpdateInput;

    @Field(() => GalleryCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GalleryCategoryWhereUniqueInput)
    where!: GalleryCategoryWhereUniqueInput;
}
