import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ModelWhereUniqueInput } from './model-where-unique.input';
import { Type } from 'class-transformer';
import { ModelCreateInput } from './model-create.input';
import { ModelUpdateInput } from './model-update.input';

@ArgsType()
export class UpsertOneModelArgs {

    @Field(() => ModelWhereUniqueInput, {nullable:false})
    @Type(() => ModelWhereUniqueInput)
    where!: Prisma.AtLeast<ModelWhereUniqueInput, 'id' | 'slug'>;

    @Field(() => ModelCreateInput, {nullable:false})
    @Type(() => ModelCreateInput)
    create!: ModelCreateInput;

    @Field(() => ModelUpdateInput, {nullable:false})
    @Type(() => ModelUpdateInput)
    update!: ModelUpdateInput;
}
