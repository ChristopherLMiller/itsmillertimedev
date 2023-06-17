import { registerEnumType } from '@nestjs/graphql';

export enum ModelTagsScalarFieldEnum {
    id = "id",
    slug = "slug",
    title = "title",
    modelId = "modelId"
}


registerEnumType(ModelTagsScalarFieldEnum, { name: 'ModelTagsScalarFieldEnum', description: undefined })
