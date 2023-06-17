import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PageCreateManyFeaturedImageInput } from './page-create-many-featured-image.input';
import { Type } from 'class-transformer';

@InputType()
export class PageCreateManyFeaturedImageInputEnvelope {

    @Field(() => [PageCreateManyFeaturedImageInput], {nullable:false})
    @Type(() => PageCreateManyFeaturedImageInput)
    data!: Array<PageCreateManyFeaturedImageInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
