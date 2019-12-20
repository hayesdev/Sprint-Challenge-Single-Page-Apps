import React from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";

import SearchForm from "./SearchForm.js";
import WelcomePage from "./WelcomePage.js";
import CharacterList from "./CharacterList.js";

const Navbar = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export function Nav() {
  return (
    <div>
      <Navbar>
        <Link to="/">Home </Link>
        <Link to="/CharacterList">Characters </Link>
        <Link to="/Search">Search </Link>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/CharacterList" component={CharacterList} />
        <Route path="/Search" component={SearchForm} />
      </Navbar>
    </div>
  );
}
