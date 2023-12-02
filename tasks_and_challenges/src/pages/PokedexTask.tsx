import React, { useState } from "react";
import { Pokemon } from "../model";
// import "./../styles/CirclesTask.css";

const PokedexTask = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([
    { name: "pikachu", power: 50 },
    { name: "charizard", power: 60 },
    { name: "bulbasaur", power: 45 },
    { name: "blastoise", power: 70 },
    { name: "Ho-Oh", power: 80 },
  ]);
  const [selectedPokemon, setSelectedPokemon] = useState(pokemons[0]);
  const [prevSelectedPokemons, setPrevSelectedPokemons] = useState<Pokemon[]>([
    pokemons[0],
  ]);

  const handleSelectPokemon = (event: React.FormEvent<HTMLSelectElement>) => {
    setSelectedPokemon(pokemons[parseInt(event.currentTarget.value)]);
    setPrevSelectedPokemons([...prevSelectedPokemons, selectedPokemon]);
  };

  const handleSelectNext = () => {
    pokemons.map((pokemon, index) => {
      if (pokemon.name === selectedPokemon.name) {
        if (pokemons.length === index + 1) {
          setSelectedPokemon(pokemons[0]);
          setPrevSelectedPokemons([...prevSelectedPokemons, pokemons[0]]);
        } else {
          setSelectedPokemon(pokemons[index + 1]);
          setPrevSelectedPokemons([
            ...prevSelectedPokemons,
            pokemons[index + 1],
          ]);
        }
      }
    });
  };

  const handleSelectPrevious = () => {
    setSelectedPokemon(prevSelectedPokemons[prevSelectedPokemons.length - 2]);
    setPrevSelectedPokemons(
      prevSelectedPokemons.slice(0, prevSelectedPokemons.length - 1)
    );
  };

  return (
    <div style={{ marginTop: "120px" }}>
      <div className="center">
        <select className="selectStyle" onClick={handleSelectPokemon}>
          {pokemons.map((pokemon, index: number) => {
            return (
              <option key={pokemon.name} value={index}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        <section className="center centerSection">
          <h2>{selectedPokemon.name}</h2>
          <h1>{selectedPokemon.power}</h1>
        </section>
        <div className="container">
          <button
            className="btn"
            disabled={prevSelectedPokemons.length < 2 ? true : false}
            onClick={handleSelectPrevious}
          >
            Prev
          </button>
          <button className="btn" onClick={handleSelectNext}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokedexTask;
