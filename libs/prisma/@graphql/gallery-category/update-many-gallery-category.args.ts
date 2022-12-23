import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryCategoryUpdateManyMutationInput } from './gallery-category-update-many-mutation.input';
import { Type } from 'class-transformer';
import { GalleryCategoryWhereInput } from './gallery-category-where.input';

@ArgsType()
export class UpdateManyGalleryCategoryArgs {

    @Field(() => GalleryCategoryUpdateManyMutationInput, {nullable:false})
    @Type(() => GalleryCategoryUpdateManyMutationInput)
    data!: GalleryCategoryUpdateManyMutationInput;

    @Field(() => GalleryCategoryWhereInput, {nullable:true})
    @Type(() => GalleryCategoryWhereInput)
    where?: GalleryCategoryWhereInput;
}
