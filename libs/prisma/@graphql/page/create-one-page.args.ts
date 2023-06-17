import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageCreateInput } from './page-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnePageArgs {

    @Field(() => PageCreateInput, {nullable:false})
    @Type(() => PageCreateInput)
    data!: PageCreateInput;
}
