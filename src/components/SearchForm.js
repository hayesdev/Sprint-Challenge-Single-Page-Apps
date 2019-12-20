import React, { useState, useEffect } from "react";
import axios from "axios";
export default function SearchForm() {
  const [searchCharacter, setSearchCharacter] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event => {
    setSearchCharacter(event.target.value);
  };
  // const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://rickandmortyapi.com/api/character/`).then(response => {
      //  setData(response.data.results);
      // console.log(response.data.results,"character search");
      const people = response.data.results;
      console.log(people, "people");
      const result = people.filter(person => {
        return person.name
          .toLowerCase()
          .includes(searchCharacter.toLowerCase());
      });

      setSearchResults(result);
    });
  }, [searchCharacter]);
  return (
    <section className="search-form">
      <input
        type="text"
        placeholder="search by name"
        value={searchCharacter}
        onChange={handleChange}
      />
      <ul>
        {searchResults &&
          searchResults.map(item => (
            <div>
              <img
                src={item.image}
                alt={"picture of character"}
                key={item.id}
              />
              <h4>{item.name}</h4>
              <p>
                {item.species}, {item.status}
              </p>
            </div>
          ))}
      </ul>
    </section>
  );
}
