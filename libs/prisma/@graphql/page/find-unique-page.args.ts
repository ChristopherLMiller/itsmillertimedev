import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageWhereUniqueInput } from './page-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquePageArgs {

    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: PageWhereUniqueInput;
}
