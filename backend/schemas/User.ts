import { list } from '@keystone-next/keystone';
import { text, relationship, password } from '@keystone-next/keystone/fields';

export const User = list({
    ui: {
      listView: {
        initialColumns: ['name', 'posts'],
      },
    },
    fields: {
      name: text({ validation: { isRequired: true }}),
      email: text({ validation: { isRequired: true }, isIndexed: 'unique' }),
      password: password(),
      posts: relationship({ ref: 'Post.author', many: true }),
    },
  });