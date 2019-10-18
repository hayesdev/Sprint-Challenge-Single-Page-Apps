import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard.js";
import axios from "axios";

export default function CharacterList() {
  // // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const charArray = [];
  function charMap() {
    characters.map(char => {
      charArray.push(char.name);
    });
  }
  console.log(charArray);

  useEffect(() => {
    //   // TODO: Add API Request here - must run in `useEffect`
    //   //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })

      .catch(error => {
        console.log("There was an error returning data", error);
      });
  }, []);

  return (
    <section className="character-list">
      <h2>Characters</h2>
      {characters.map(char => {
        return (
          <CharacterCard
            key={char.id}
            name={char.name}
            status={char.status}
            species={char.species}
          />
        );
      })}
    </section>
  );
}
