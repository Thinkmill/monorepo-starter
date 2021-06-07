import { Tag } from './Tag';
import { Post } from './Post';
import { User } from './User';
import { createSchema } from '@keystone-next/keystone/schema';

export const lists = createSchema({
    User,
    Post,
    Tag
})