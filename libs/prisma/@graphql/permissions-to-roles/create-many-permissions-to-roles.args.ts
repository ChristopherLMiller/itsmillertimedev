import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { PermissionsToRolesCreateManyInput } from './permissions-to-roles-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyPermissionsToRolesArgs {

    @Field(() => [PermissionsToRolesCreateManyInput], {nullable:false})
    @Type(() => PermissionsToRolesCreateManyInput)
    data!: Array<PermissionsToRolesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
