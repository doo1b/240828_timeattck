import React from "react";
import MOCK_DATA from "../MOCK_DATA";
import { useNavigate, useSearchParams } from "react-router-dom";

const Detail = () => {
  const pokemonList = MOCK_DATA;
  const [pokemonId, setPokemonId] = useSearchParams();
  const id = pokemonId.get("id");
  const pokemon = pokemonList.find((p) => p.id === Number(id));
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <div>No.{pokemon.id.toString().padStart(3, "0")}</div>
      <div>{pokemon.korean_name}</div>
      <img src={pokemon.img_url} />
      <div>{pokemon.description}</div>
      <div>
        타입 :{" "}
        {pokemon.types.map((type, index) => {
          return index === 0 ? type + ", " : type;
        })}
      </div>
      <button onClick={() => navigate(-1)}>뒤로가기</button>
    </>
  );
};

export default Detail;
