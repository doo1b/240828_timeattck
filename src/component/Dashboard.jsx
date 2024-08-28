import React from "react";
import SelectPokemon from "./SelectPokemon";

const Dashboard = ({ selectPokemon, removePokemon }) => {
  return (
    <div>
      {selectPokemon.map((pokemon) => {
        return (
          <SelectPokemon
            key={`board-${pokemon.id}`}
            pokemon={pokemon}
            removePokemon={removePokemon}
          />
        );
      })}
    </div>
  );
};

export default Dashboard;
