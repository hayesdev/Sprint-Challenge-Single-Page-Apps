import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = styled.div`
  display: flex;
  justify-content: center;
`;

export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <Home>
        <header>
          <h1>Welcome to the ultimate fan site!</h1>
          <img
            className="main-img"
            src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
            alt="rick"
          />
        </header>
      </Home>
    </section>
  );
}
