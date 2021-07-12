import { config } from '@keystone-next/keystone/schema';
import {
  statelessSessions
} from '@keystone-next/keystone/session';
import { createAuth } from '@keystone-next/auth';

import { lists } from './schemas';

let sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
  if (process.env.NODE_ENV === 'production') {
    throw new Error(
      'The SESSION_SECRET environment variable must be set in production'
    );
  } else {
    sessionSecret = '-- DEV COOKIE SECRET; CHANGE ME --';
  }
}

let sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const auth = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  sessionData: `id name email`,
  initFirstItem: {
    fields: ['name', 'email', 'password'],
  },
});

export default auth.withAuth(
  config({
    db: {
      adapter: 'prisma_postgresql',
      url: process.env.DATABASE_URL || 'postgres://postgres:mysecretpassword@localhost:55000',
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    lists,
    session: statelessSessions({
      maxAge: sessionMaxAge,
      secret: sessionSecret,
    }),
  })
);
