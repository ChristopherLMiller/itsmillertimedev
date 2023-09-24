import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AlertCreateManyInput } from './alert-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAlertArgs {

    @Field(() => [AlertCreateManyInput], {nullable:false})
    @Type(() => AlertCreateManyInput)
    data!: Array<AlertCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
