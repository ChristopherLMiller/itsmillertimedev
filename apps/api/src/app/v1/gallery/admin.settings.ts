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
  ],
  properties: {
    slug: {
      isRequired: false,
      isDisabled: true,
    },
    isNsfw: {
      isRequired: false,
    },
    description: {
      type: 'textarea',
      props: {
        rows: 10,
      },
    },
  },
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
  listProperties: ['title', 'createdAt', 'updatedAt', 'visibility', 'url'],
};
