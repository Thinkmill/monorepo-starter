import { list } from '@keystone-next/keystone/schema';
import { text, relationship, password } from '@keystone-next/fields';

export const User = list({
    ui: {
      listView: {
        initialColumns: ['name', 'posts'],
      },
    },
    fields: {
      name: text({ isRequired: true }),
      email: text({ isRequired: true, isUnique: true }),
      password: password(),
      posts: relationship({ ref: 'Post.author', many: true }),
    },
  });