import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlertWhereUniqueInput } from './alert-where-unique.input';
import { Type } from 'class-transformer';
import { AlertCreateInput } from './alert-create.input';
import { AlertUpdateInput } from './alert-update.input';

@ArgsType()
export class UpsertOneAlertArgs {

    @Field(() => AlertWhereUniqueInput, {nullable:false})
    @Type(() => AlertWhereUniqueInput)
    where!: AlertWhereUniqueInput;

    @Field(() => AlertCreateInput, {nullable:false})
    @Type(() => AlertCreateInput)
    create!: AlertCreateInput;

    @Field(() => AlertUpdateInput, {nullable:false})
    @Type(() => AlertUpdateInput)
    update!: AlertUpdateInput;
}
