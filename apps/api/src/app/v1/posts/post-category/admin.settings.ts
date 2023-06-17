import { PostsNavigation } from '../admin.settings';

export const PostCategoryAdminSettings = {
  navigation: PostsNavigation,
  listProperties: ['title', 'slug'],
  properties: {
    slug: {
      isRequired: false,
      isDisabled: true,
    },
  },
};
