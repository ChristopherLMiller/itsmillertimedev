import { registerEnumType } from '@nestjs/graphql';

export enum MarkerScalarFieldEnum {
    id = "id",
    lat = "lat",
    lon = "lon",
    siteURL = "siteURL",
    galleryURL = "galleryURL",
    title = "title",
    rating = "rating",
    visited = "visited",
    visits = "visits"
}


registerEnumType(MarkerScalarFieldEnum, { name: 'MarkerScalarFieldEnum', description: undefined })
