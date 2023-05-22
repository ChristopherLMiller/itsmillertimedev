import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageUpdateInput } from './page-update.input';
import { Type } from 'class-transformer';
import { PageWhereUniqueInput } from './page-where-unique.input';

@ArgsType()
export class UpdateOnePageArgs {

    @Field(() => PageUpdateInput, {nullable:false})
    @Type(() => PageUpdateInput)
    data!: PageUpdateInput;

    @Field(() => PageWhereUniqueInput, {nullable:false})
    @Type(() => PageWhereUniqueInput)
    where!: PageWhereUniqueInput;
}
