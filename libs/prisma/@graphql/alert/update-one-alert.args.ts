import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlertUpdateInput } from './alert-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AlertWhereUniqueInput } from './alert-where-unique.input';

@ArgsType()
export class UpdateOneAlertArgs {

    @Field(() => AlertUpdateInput, {nullable:false})
    @Type(() => AlertUpdateInput)
    data!: AlertUpdateInput;

    @Field(() => AlertWhereUniqueInput, {nullable:false})
    @Type(() => AlertWhereUniqueInput)
    where!: Prisma.AtLeast<AlertWhereUniqueInput, 'id'>;
}
