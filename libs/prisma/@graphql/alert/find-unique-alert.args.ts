import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AlertWhereUniqueInput } from './alert-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAlertArgs {

    @Field(() => AlertWhereUniqueInput, {nullable:false})
    @Type(() => AlertWhereUniqueInput)
    where!: Prisma.AtLeast<AlertWhereUniqueInput, 'id'>;
}
