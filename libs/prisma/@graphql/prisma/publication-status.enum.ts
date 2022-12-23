import { registerEnumType } from '@nestjs/graphql';

export enum PublicationStatus {
    PUBLISHED = "PUBLISHED",
    DRAFT = "DRAFT"
}


registerEnumType(PublicationStatus, { name: 'PublicationStatus', description: undefined })
