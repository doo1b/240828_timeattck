import React from "react";
import { usePokemon } from "../context/PokemonContext";
import SelectPokemon from "./SelectPokemon";

const Dashboard = () => {
  const { selectPokemon } = usePokemon();

  return (
    <div>
      {selectPokemon.map((pokemon) => {
        return <SelectPokemon key={`board-${pokemon.id}`} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default Dashboard;
