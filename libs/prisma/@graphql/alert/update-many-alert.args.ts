import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlertUpdateManyMutationInput } from './alert-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AlertWhereInput } from './alert-where.input';

@ArgsType()
export class UpdateManyAlertArgs {

    @Field(() => AlertUpdateManyMutationInput, {nullable:false})
    @Type(() => AlertUpdateManyMutationInput)
    data!: AlertUpdateManyMutationInput;

    @Field(() => AlertWhereInput, {nullable:true})
    @Type(() => AlertWhereInput)
    where?: AlertWhereInput;
}
