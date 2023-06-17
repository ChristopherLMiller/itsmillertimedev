import { registerEnumType } from '@nestjs/graphql';

export enum ModelScalarFieldEnum {
    id = "id",
    title = "title",
    slug = "slug",
    completed = "completed",
    visibility = "visibility",
    metaTitle = "metaTitle",
    summary = "summary",
    featuredImage = "featuredImage",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    clockifyProjectId = "clockifyProjectId",
    contents = "contents",
    yearReleased = "yearReleased",
    completedAt = "completedAt",
    imagePublic_id = "imagePublic_id",
    manufacturerId = "manufacturerId",
    scaleId = "scaleId"
}


registerEnumType(ModelScalarFieldEnum, { name: 'ModelScalarFieldEnum', description: undefined })
