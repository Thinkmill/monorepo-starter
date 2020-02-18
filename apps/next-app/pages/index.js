import React from "react";
import Button from "@monorepo-starter/button";
import { useLazyQuery, useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const getAuthorDetails = gql`
  query($name: String) {
    author(name: $name) {
      name
      books {
        title
      }
    }
  }
`;

const getAuthors = gql`
  query {
    authors {
      name
    }
  }
`;

const Preamble = () => (
  <>
    <h1>Welcome to Our monorepo starter!</h1>
    <p>
      This is a simple project, with three packages, an app (this!), a graphql
      server, and a button component.
    </p>
  </>
);

function HomePage() {
  const { data: authorList, initialLoading, initialError } = useQuery(
    getAuthors
  );
  const [getAuthor, { loading, error, data }] = useLazyQuery(getAuthorDetails);

  if (!authorList) {
    return null;
  }

  return (
    <div
      style={{
        textAlign: "center"
      }}
    >
      <Preamble />
      <h2>
        As a treat, we've got some cool author recs Click on an author to see
        some of their books:
      </h2>
      <div>
        {authorList.authors.map(({ name }) => (
          <Button
            key={name}
            isSelected={data && data.author.name === name}
            onClick={() => {
              getAuthor({ variables: { name } });
            }}
          >
            {name}
          </Button>
        ))}
      </div>
      <div style={{ marginTop: "24px" }}>
        {data ? (
          <div>
            <ul>
              {data.author.books.map(({ title }) => (
                <li style={{ listStyle: "none" }} key={title}>
                  {title}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default HomePage;
