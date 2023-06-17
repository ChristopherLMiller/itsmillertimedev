import { ModelsNavigation } from '../admin.settings';

export const ManufacturerAdminSettings = {
  navigation: ModelsNavigation,
  listProperties: ['title', 'slug'],
  properties: {
    slug: {
      isRequired: false,
      isDisabled: true,
    },
  },
};
