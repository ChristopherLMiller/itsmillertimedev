export const PageNavigation = {
  name: 'Pages',
  icon: 'FileText',
};

export const PageAdminSettings = {
  navigation: PageNavigation,
  listProperties: ['title', 'summary', 'createdAt', 'updatedAt', 'isPublic'],
  properties: {
    content: {
      type: 'textarea',
    },
  },
};
