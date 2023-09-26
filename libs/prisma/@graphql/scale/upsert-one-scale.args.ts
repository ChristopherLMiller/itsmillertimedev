import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ScaleWhereUniqueInput } from './scale-where-unique.input';
import { Type } from 'class-transformer';
import { ScaleCreateInput } from './scale-create.input';
import { ScaleUpdateInput } from './scale-update.input';

@ArgsType()
export class UpsertOneScaleArgs {

    @Field(() => ScaleWhereUniqueInput, {nullable:false})
    @Type(() => ScaleWhereUniqueInput)
    where!: Prisma.AtLeast<ScaleWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ScaleCreateInput, {nullable:false})
    @Type(() => ScaleCreateInput)
    create!: ScaleCreateInput;

    @Field(() => ScaleUpdateInput, {nullable:false})
    @Type(() => ScaleUpdateInput)
    update!: ScaleUpdateInput;
}
