import { ApolloServer, gql } from "apollo-server";

import { addMockFunctionsToSchema, makeExecutableSchema } from "graphql-tools";

const typeDefs = gql`
  type Query {
    books: [Book]
    author: [Author]
  }
  type Book {
    title: String
    author: Author
  }

  type Author {
    name: String
    books: [Book]
  }
`;

const schema = makeExecutableSchema({
  typeDefs
});

addMockFunctionsToSchema({
  schema
});

const server = new ApolloServer({ schema });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
