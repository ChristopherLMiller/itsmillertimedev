import { PostsNavigation } from '../admin.settings';

export const PostTagAdminSettings = {
  navigation: PostsNavigation,
  listProperties: ['title', 'slug'],
  properties: {
    slug: {
      isRequired: false,
      isDisabled: true,
    },
  },
};
