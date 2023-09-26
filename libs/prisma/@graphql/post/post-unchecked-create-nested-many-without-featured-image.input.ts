import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutFeaturedImageInput } from './post-create-without-featured-image.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutFeaturedImageInput } from './post-create-or-connect-without-featured-image.input';
import { PostCreateManyFeaturedImageInputEnvelope } from './post-create-many-featured-image-input-envelope.input';
import { Prisma } from '@prisma/client';
import { PostWhereUniqueInput } from './post-where-unique.input';

@InputType()
export class PostUncheckedCreateNestedManyWithoutFeaturedImageInput {

    @Field(() => [PostCreateWithoutFeaturedImageInput], {nullable:true})
    @Type(() => PostCreateWithoutFeaturedImageInput)
    create?: Array<PostCreateWithoutFeaturedImageInput>;

    @Field(() => [PostCreateOrConnectWithoutFeaturedImageInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutFeaturedImageInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutFeaturedImageInput>;

    @Field(() => PostCreateManyFeaturedImageInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyFeaturedImageInputEnvelope)
    createMany?: PostCreateManyFeaturedImageInputEnvelope;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<PostWhereUniqueInput, 'id' | 'slug'>>;
}
