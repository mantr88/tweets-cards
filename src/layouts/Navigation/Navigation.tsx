import React from "react";
import { Header, Link } from "./Navigation.styled";

function Navigation() {
  return (
    <Header>
      <nav>
        <Link to="/tweets-cards/">Home</Link>
        <Link to="/tweets-cards/tweets">Tweets</Link>
      </nav>
    </Header>
  );
}

export default Navigation;
