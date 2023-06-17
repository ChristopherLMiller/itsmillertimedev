import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageScalarWhereInput } from './page-scalar-where.input';
import { Type } from 'class-transformer';
import { PageUpdateManyMutationInput } from './page-update-many-mutation.input';

@InputType()
export class PageUpdateManyWithWhereWithoutFeaturedImageInput {

    @Field(() => PageScalarWhereInput, {nullable:false})
    @Type(() => PageScalarWhereInput)
    where!: PageScalarWhereInput;

    @Field(() => PageUpdateManyMutationInput, {nullable:false})
    @Type(() => PageUpdateManyMutationInput)
    data!: PageUpdateManyMutationInput;
}
