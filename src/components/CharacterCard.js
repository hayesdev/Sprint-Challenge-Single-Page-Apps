import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 500px;
  height: 275px;
  font-size: 25px;
  color: black;
  background: lightblue;
  margin: 10px;
  border-radius: 20px;
`;

export default function CharacterCard(props) {
  return (
    <div className="character-card" key={props.id}>
      <Card>
        <h2>{props.name}</h2>
        <p>Status: {props.status}</p>
        <p>Species: {props.species}</p>
      </Card>
    </div>
  );
}
