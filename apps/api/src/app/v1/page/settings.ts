export const PageNavigation = {
  name: 'Blog',
  icon: 'Blog',
};

export const PageAdminSettings = {
  navigation: PageNavigation,
  listProperties: [
    'title',
    'summary',
    'createdAt',
    'updatedAt',
    'published',
    'isPublic',
  ],
  properties: {
    content: {
      type: 'textarea',
    },
  },
};
