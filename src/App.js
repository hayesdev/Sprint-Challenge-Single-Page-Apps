import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import { Nav } from "./components/Nav.js";

export default function App() {
  return (
    <main>
      <Header />
      <Nav />
    </main>
  );
}
