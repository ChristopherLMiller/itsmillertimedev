import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SessionCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    sid!: string;

    @Field(() => String, {nullable:false})
    data!: string;

    @Field(() => Date, {nullable:false})
    expiresAt!: Date | string;
}
