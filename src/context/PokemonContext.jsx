import React, { createContext, useContext, useState } from "react";

const PokemonContext = createContext();

export function usePokemon() {
  return useContext(PokemonContext);
}

export function PokemonProvider({ children }) {
  const [selectPokemon, setSelectPokemon] = useState([]);

  const addPokemon = (pokemon) => {
    if (selectPokemon.some((p) => p.id === pokemon.id)) {
      alert("중복입니다");
    } else if (selectPokemon.length > 5) {
      alert("이미 최대로 등록되었습니다");
    } else {
      setSelectPokemon((prev) => [...prev, pokemon]);
    }
  };

  const removePokemon = (id) => {
    setSelectPokemon((pokemonList) =>
      pokemonList.filter((pokemon) => pokemon.id !== id)
    );
  };

  return (
    <PokemonContext.Provider
      value={{ setSelectPokemon, addPokemon, removePokemon, selectPokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
