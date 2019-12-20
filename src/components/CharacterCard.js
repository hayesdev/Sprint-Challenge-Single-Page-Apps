import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 500px;
  height: 275px;
  font-size: 25px;
  color: black;
  background: lightblue;
  margin: 10px;
  padding: 0;
  border-radius: 20px;
  text-align: center;
`;

export default function CharacterCard(props) {
  return (
    <div className="character-card" key={props.id}>
      <Card>
        <h2>{props.name}</h2>
        <h3>Species: {props.species}</h3>
        <p>Origin: {props.origin}</p>
        <p>Status: {props.status}</p>
        <p></p>
      </Card>
    </div>
  );
}
