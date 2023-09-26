import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ModelUpdateInput } from './model-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { ModelWhereUniqueInput } from './model-where-unique.input';

@ArgsType()
export class UpdateOneModelArgs {

    @Field(() => ModelUpdateInput, {nullable:false})
    @Type(() => ModelUpdateInput)
    data!: ModelUpdateInput;

    @Field(() => ModelWhereUniqueInput, {nullable:false})
    @Type(() => ModelWhereUniqueInput)
    where!: Prisma.AtLeast<ModelWhereUniqueInput, 'id' | 'slug'>;
}
