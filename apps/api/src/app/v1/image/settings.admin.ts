export const ImageNavigation = {
  name: 'Media',
  icon: 'media',
};

export const ImageAdminSettings = {
  navigation: ImageNavigation,
  listProperties: [
    'public_id',
    'format',
    'alt',
    'caption',
    'width',
    'height',
    'createdAt',
    'updatedAt',
  ],
  properties: {
    thumbnail: {
      isVisible: {
        edit: false,
        show: false,
        list: false,
        filter: false,
      },
    },
  },
};
