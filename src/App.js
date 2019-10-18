import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import CharacterList from "./components/CharacterList.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";

export default function App() {
  return (
    <main>
      <Header />
      <Link to="/">Home</Link>
      {/* <Link to="/">Characters</Link> */}
      <CharacterList />

      <Route exact path="/" component={WelcomePage} />
    </main>
  );
}
