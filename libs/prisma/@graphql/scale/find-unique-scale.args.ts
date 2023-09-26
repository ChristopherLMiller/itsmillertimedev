import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScaleWhereUniqueInput } from './scale-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueScaleArgs {

    @Field(() => ScaleWhereUniqueInput, {nullable:false})
    @Type(() => ScaleWhereUniqueInput)
    where!: Prisma.AtLeast<ScaleWhereUniqueInput, 'id' | 'slug'>;
}
