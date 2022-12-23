import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { PostCreateWithoutFeaturedImageInput } from './post-create-without-featured-image.input';
import { Type } from 'class-transformer';
import { PostCreateOrConnectWithoutFeaturedImageInput } from './post-create-or-connect-without-featured-image.input';
import { PostUpsertWithWhereUniqueWithoutFeaturedImageInput } from './post-upsert-with-where-unique-without-featured-image.input';
import { PostCreateManyFeaturedImageInputEnvelope } from './post-create-many-featured-image-input-envelope.input';
import { PostWhereUniqueInput } from './post-where-unique.input';
import { PostUpdateWithWhereUniqueWithoutFeaturedImageInput } from './post-update-with-where-unique-without-featured-image.input';
import { PostUpdateManyWithWhereWithoutFeaturedImageInput } from './post-update-many-with-where-without-featured-image.input';
import { PostScalarWhereInput } from './post-scalar-where.input';

@InputType()
export class PostUncheckedUpdateManyWithoutFeaturedImageNestedInput {

    @Field(() => [PostCreateWithoutFeaturedImageInput], {nullable:true})
    @Type(() => PostCreateWithoutFeaturedImageInput)
    create?: Array<PostCreateWithoutFeaturedImageInput>;

    @Field(() => [PostCreateOrConnectWithoutFeaturedImageInput], {nullable:true})
    @Type(() => PostCreateOrConnectWithoutFeaturedImageInput)
    connectOrCreate?: Array<PostCreateOrConnectWithoutFeaturedImageInput>;

    @Field(() => [PostUpsertWithWhereUniqueWithoutFeaturedImageInput], {nullable:true})
    @Type(() => PostUpsertWithWhereUniqueWithoutFeaturedImageInput)
    upsert?: Array<PostUpsertWithWhereUniqueWithoutFeaturedImageInput>;

    @Field(() => PostCreateManyFeaturedImageInputEnvelope, {nullable:true})
    @Type(() => PostCreateManyFeaturedImageInputEnvelope)
    createMany?: PostCreateManyFeaturedImageInputEnvelope;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    set?: Array<PostWhereUniqueInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    disconnect?: Array<PostWhereUniqueInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    delete?: Array<PostWhereUniqueInput>;

    @Field(() => [PostWhereUniqueInput], {nullable:true})
    @Type(() => PostWhereUniqueInput)
    connect?: Array<PostWhereUniqueInput>;

    @Field(() => [PostUpdateWithWhereUniqueWithoutFeaturedImageInput], {nullable:true})
    @Type(() => PostUpdateWithWhereUniqueWithoutFeaturedImageInput)
    update?: Array<PostUpdateWithWhereUniqueWithoutFeaturedImageInput>;

    @Field(() => [PostUpdateManyWithWhereWithoutFeaturedImageInput], {nullable:true})
    @Type(() => PostUpdateManyWithWhereWithoutFeaturedImageInput)
    updateMany?: Array<PostUpdateManyWithWhereWithoutFeaturedImageInput>;

    @Field(() => [PostScalarWhereInput], {nullable:true})
    @Type(() => PostScalarWhereInput)
    deleteMany?: Array<PostScalarWhereInput>;
}
