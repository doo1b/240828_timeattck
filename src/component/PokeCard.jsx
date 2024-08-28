import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPokemon } from "../redux/slices/pokemonSlice";

const PokeCard = ({ pokemon }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAdd = () => {
    dispatch(addPokemon(pokemon));
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
            e.stopPropagation();
            handleAdd();
          }}
        >
          추가
        </button>
      </div>
    </>
  );
};

export default PokeCard;
