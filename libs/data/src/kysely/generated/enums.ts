export const PublicationStatus = {
  PUBLISHED: "PUBLISHED",
  DRAFT: "DRAFT",
} as const;
export type PublicationStatus =
  (typeof PublicationStatus)[keyof typeof PublicationStatus];
export const Visibility = {
  PUBLIC: "PUBLIC",
  PROTECTED: "PROTECTED",
  PRIVATE: "PRIVATE",
} as const;
export type Visibility = (typeof Visibility)[keyof typeof Visibility];
