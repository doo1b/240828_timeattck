import React, { useState } from "react";
import Dashboard from "../component/Dashboard";
import PokeList from "../component/PokeList";
import MOCK_DATA from "../MOCK_DATA";

const Dex = () => {
  const pokemonList = MOCK_DATA;
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
    <>
      <Dashboard removePokemon={removePokemon} selectPokemon={selectPokemon} />
      <PokeList pokemonList={pokemonList} addPokemon={addPokemon} />
    </>
  );
};

export default Dex;
