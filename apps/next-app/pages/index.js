import React from "react";
import Button from "@monorepo-starter/button";
import { useLazyQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const query = gql`
  query {
    author(name: "N K Jemisin") {
      name
      books {
        title
      }
    }
  }
`;

function HomePage() {
  const [getAuthor, { loading, error, data }] = useLazyQuery(query);

  return (
    <div
      style={{
        textAlign: "center"
      }}
    >
      <h1>Welcome to Our monorepo starter!</h1>
      <h2>
        If you've got the graphql app running, click the button bellow to fetch
        some cool books
      </h2>
      <Button onClick={getAuthor}>Get some cool book recs</Button>
      <div style={{ marginTop: "24px" }}>
        {data
          ? `You should totally read ${data.author.books
              .map(({ title }) => title)
              .join(", and ")} by ${data.author.name}`
          : null}
      </div>
    </div>
  );
}

export default HomePage;
