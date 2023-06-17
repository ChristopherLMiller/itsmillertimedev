import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PageCreateManyInput } from './page-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPageArgs {

    @Field(() => [PageCreateManyInput], {nullable:false})
    @Type(() => PageCreateManyInput)
    data!: Array<PageCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
