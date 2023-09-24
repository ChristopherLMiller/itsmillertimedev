import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PermissionWhereInput } from './permission-where.input';

@InputType()
export class PermissionRelationFilter {

    @Field(() => PermissionWhereInput, {nullable:true})
    is?: PermissionWhereInput;

    @Field(() => PermissionWhereInput, {nullable:true})
    isNot?: PermissionWhereInput;
}
