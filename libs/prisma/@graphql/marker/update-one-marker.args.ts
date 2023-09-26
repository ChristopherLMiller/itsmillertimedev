import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MarkerUpdateInput } from './marker-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { MarkerWhereUniqueInput } from './marker-where-unique.input';

@ArgsType()
export class UpdateOneMarkerArgs {

    @Field(() => MarkerUpdateInput, {nullable:false})
    @Type(() => MarkerUpdateInput)
    data!: MarkerUpdateInput;

    @Field(() => MarkerWhereUniqueInput, {nullable:false})
    @Type(() => MarkerWhereUniqueInput)
    where!: Prisma.AtLeast<MarkerWhereUniqueInput, 'id'>;
}
