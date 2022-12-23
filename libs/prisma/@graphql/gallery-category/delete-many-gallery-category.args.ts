import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GalleryCategoryWhereInput } from './gallery-category-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyGalleryCategoryArgs {

    @Field(() => GalleryCategoryWhereInput, {nullable:true})
    @Type(() => GalleryCategoryWhereInput)
    where?: GalleryCategoryWhereInput;
}
