import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageWhereInput } from './page-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyPageArgs {

    @Field(() => PageWhereInput, {nullable:true})
    @Type(() => PageWhereInput)
    where?: PageWhereInput;
}
