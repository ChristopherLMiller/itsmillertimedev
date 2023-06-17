import { ModelsNavigation } from '../admin.settings';

export const ModelAdminSettings = {
  navigation: ModelsNavigation,
  listProperties: [
    'title',
    'metaTitle',
    'visibility',
    'createdAt',
    'updatedAt',
    'scale',
    'manufacturer',
    'completed',
    'completedAt',
  ],
  properties: {
    slug: {
      isRequired: false,
      isDisabled: true,
    },
  },
};
