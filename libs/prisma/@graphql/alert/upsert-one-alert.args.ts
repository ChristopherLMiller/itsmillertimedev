import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AlertWhereUniqueInput } from './alert-where-unique.input';
import { Type } from 'class-transformer';
import { AlertCreateInput } from './alert-create.input';
import { AlertUpdateInput } from './alert-update.input';

@ArgsType()
export class UpsertOneAlertArgs {

    @Field(() => AlertWhereUniqueInput, {nullable:false})
    @Type(() => AlertWhereUniqueInput)
    where!: Prisma.AtLeast<AlertWhereUniqueInput, 'id'>;

    @Field(() => AlertCreateInput, {nullable:false})
    @Type(() => AlertCreateInput)
    create!: AlertCreateInput;

    @Field(() => AlertUpdateInput, {nullable:false})
    @Type(() => AlertUpdateInput)
    update!: AlertUpdateInput;
}
