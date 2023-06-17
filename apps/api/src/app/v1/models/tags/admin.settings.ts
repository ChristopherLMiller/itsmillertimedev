import { ModelsNavigation } from '../admin.settings';

export const ModelTagsAdminSettings = {
  navigation: ModelsNavigation,
  listProperties: ['title', 'slug'],
  properties: {
    slug: {
      isRequired: false,
      isDisabled: true,
    },
  },
};
