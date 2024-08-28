import React from "react";
import { useNavigate } from "react-router-dom";
import { usePokemon } from "../context/PokemonContext";

const SelectPokemon = ({ pokemon }) => {
  const { removePokemon } = usePokemon();
  const handleRemove = () => {
    removePokemon(pokemon.id);
  };
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate(`/detail?id=${pokemon.id}`)}>
        <div>No.{pokemon.id.toString().padStart(3, "0")}</div>
        <div>{pokemon.korean_name}</div>
        <img src={pokemon.img_url} />
        <div>{pokemon.description}</div>
        <button
          onClick={(e) => {
            handleRemove();
            e.stopPropagation();
          }}
        >
          삭제
        </button>
      </div>
    </>
  );
};

export default SelectPokemon;
