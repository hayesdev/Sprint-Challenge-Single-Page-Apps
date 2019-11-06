import React from "react";
import { Route, Link } from "react-router-dom";
import CharacterList from "./components/CharacterList.js";
import Header from "./components/Header.js";
import SearchForm from "./components/SearchForm.js";
import WelcomePage from "./components/WelcomePage.js";

export default function App() {
  return (
    <main>
      <Header />
      <Link to="/">Home</Link>
      <Link to="/CharacterList">Characters</Link>
      <Link to="/Search">Search</Link>

      <Route exact path="/" component={WelcomePage} />
      <Route path="/CharacterList" component={CharacterList} />
      <Route path="/Search" component={SearchForm} />
    </main>
  );
}
