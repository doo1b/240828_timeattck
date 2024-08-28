import React, { useState } from "react";
import Dashboard from "../component/Dashboard";
import PokeList from "../component/PokeList";
import MOCK_DATA from "../MOCK_DATA";

const Dex = () => {
  const pokemonList = MOCK_DATA;

  return (
    <>
      <Dashboard />
      <PokeList pokemonList={pokemonList} />
    </>
  );
};

export default Dex;
