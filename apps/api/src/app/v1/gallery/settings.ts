export const GalleryNavigation = {
  name: 'Gallery',
};

export const GalleryAdminSettings = {
  navigation: GalleryNavigation,
  listProperties: [
    'title',
    'description',
    'createdAt',
    'updatedAt',
    'visibility',
    'isNsfw',
    'image',
    'categories',
    'tags',
  ],
};

export const GalleryTagAdminSettings = {
  navigation: GalleryNavigation,
  listProperties: ['title', 'slug', 'Gallery'],
};

export const GalleryCategoryAdminSettings = {
  navigation: GalleryNavigation,
  listProperties: ['title', 'slug', 'Gallery'],
};

export const GalleryImageAdminSettings = {
  navigation: GalleryNavigation,
  listProperties: [
    'title',
    'createdAt',
    'updatedAt',
    'visibility',
    'url',
    'galleries',
  ],
};
