import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from "axios";
import SearchForm from "./SearchForm";
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`).then(response => {
      setData(response.data.results);
      console.log(response.data.results, "character");
    });
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);
  return (
    <section className="character-list grid-view">
      {data.map(res => (
        <CharacterCard
          key={res.id}
          image={res.image}
          name={res.name}
          species={res.species}
          status={res.status}
          origin={res.origin.name}
        />
      ))}
      {/* <SearchForm /> */}
    </section>
  );
}
