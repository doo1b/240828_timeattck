import { createSlice } from "@reduxjs/toolkit";

const initialState = { selectPokemon: [] };

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    addPokemon: (state, action) => {
      const pokemon = action.payload;
      if (state.selectPokemon.some((p) => p.id === pokemon.id)) {
        alert("중복입니다");
      } else if (state.selectPokemon.length > 5) {
        alert("이미 최대로 등록되었습니다");
      } else {
        state.selectPokemon.push(pokemon);
      }
    },

    removePokemon: (state, action) => {
      state.selectPokemon = state.selectPokemon.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
  },
});

export const { addPokemon, removePokemon } = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;
