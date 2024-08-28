import React from "react";
import PokeCard from "./PokeCard";

const PokeList = ({ pokemonList, addPokemon }) => {
  return (
    <div>
      {pokemonList.map((pokemon) => {
        return (
          <PokeCard
            key={`${pokemon.korean_name}-${pokemon.id}`}
            pokemon={pokemon}
            addPokemon={addPokemon}
          />
        );
      })}
    </div>
  );
};

export default PokeList;
