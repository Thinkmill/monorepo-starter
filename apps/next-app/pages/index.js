import React from "react";
import Button from "@monorepo-starter/button";

function HomePage() {
  return (
    <div>
      <h1>Welcome to Our monorepo starter!</h1>
      <h2>
        If you've got the graphql app running, click the button below to fetch
        the data from it
      </h2>
      <Button>Such data as dreams are made of</Button>
    </div>
  );
}

export default HomePage;
