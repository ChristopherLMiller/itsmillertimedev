import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ScaleUpdateInput } from './scale-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ScaleWhereUniqueInput } from './scale-where-unique.input';

@ArgsType()
export class UpdateOneScaleArgs {

    @Field(() => ScaleUpdateInput, {nullable:false})
    @Type(() => ScaleUpdateInput)
    data!: ScaleUpdateInput;

    @Field(() => ScaleWhereUniqueInput, {nullable:false})
    @Type(() => ScaleWhereUniqueInput)
    where!: Prisma.AtLeast<ScaleWhereUniqueInput, 'id' | 'slug'>;
}
