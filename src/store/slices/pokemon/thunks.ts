import { createAsyncThunk } from "@reduxjs/toolkit";


export const getPokemons = createAsyncThunk(
  "pokemon/getPokemon",
  async (page: number, thunkAPI) => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page }`
      );
      const dataPokemon = await response.json();
      const results = dataPokemon;

      return results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
