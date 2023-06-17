import { PostsNavigation } from '../admin.settings';

export const PostAdminSettings = {
  navigation: PostsNavigation,
  listProperties: [
    'title',
    'createdAt',
    'updatedAt',
    'published',
    'publishedAt',
    'category',
  ],
  properties: {
    content: {
      type: 'textarea',
      props: {
        rows: 10,
      },
    },
    title: {
      isTitle: true,
    },
    slug: {
      isRequired: false,
      isDisabled: true,
    },
  },
};
