import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageUpdateManyMutationInput } from './page-update-many-mutation.input';
import { Type } from 'class-transformer';
import { PageWhereInput } from './page-where.input';

@ArgsType()
export class UpdateManyPageArgs {

    @Field(() => PageUpdateManyMutationInput, {nullable:false})
    @Type(() => PageUpdateManyMutationInput)
    data!: PageUpdateManyMutationInput;

    @Field(() => PageWhereInput, {nullable:true})
    @Type(() => PageWhereInput)
    where?: PageWhereInput;
}
