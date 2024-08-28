import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removePokemon } from "../redux/slices/pokemonSlice";

const SelectPokemon = ({ pokemon }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removePokemon(pokemon.id));
  };

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
