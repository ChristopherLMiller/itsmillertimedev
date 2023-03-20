import { PostsNavigation } from '../settings';

export const PostAdminSettings = {
  navigation: PostsNavigation,
  listProperties: [
    'title',
    'summary',
    'createdAt',
    'updatedAt',
    'published',
    'publishedAt',
    'category',
    'tags',
  ],
  properties: {
    content: {
      type: 'richtext',
    },
  },
};
