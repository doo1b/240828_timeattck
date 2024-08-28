import React from "react";
import SelectPokemon from "./SelectPokemon";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const selectPokemon = useSelector((state) => state.pokemon.selectPokemon);

  return (
    <div>
      {selectPokemon.map((pokemon) => {
        return <SelectPokemon key={`board-${pokemon.id}`} pokemon={pokemon} />;
      })}
    </div>
  );
};

export default Dashboard;
