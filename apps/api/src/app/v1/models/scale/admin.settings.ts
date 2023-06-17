import { ModelsNavigation } from '../admin.settings';

export const ScaleAdminSettings = {
  navigation: ModelsNavigation,
  listProperties: ['title', 'slug'],
  properties: {
    slug: {
      isRequired: false,
      isDisabled: true,
    },
  },
};
