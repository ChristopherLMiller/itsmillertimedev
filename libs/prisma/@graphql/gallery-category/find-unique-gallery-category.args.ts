import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GalleryCategoryWhereUniqueInput } from './gallery-category-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueGalleryCategoryArgs {

    @Field(() => GalleryCategoryWhereUniqueInput, {nullable:false})
    @Type(() => GalleryCategoryWhereUniqueInput)
    where!: Prisma.AtLeast<GalleryCategoryWhereUniqueInput, 'id' | 'slug'>;
}
