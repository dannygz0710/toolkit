import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getPokemons } from "./thunks";



interface pokemonState {
  results: [];
  isLoading: boolean;
}

const initialState: pokemonState = {
  results: [],
  isLoading: false,
};

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemons.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getPokemons.fulfilled,
        (state, action: PayloadAction<pokemonState>) => {
          state.results = action.payload.results;
        }
      );
  },
});

// export const {  startLoadingPokemons, setPokemons } = pokemonSlice.actions
export default pokemonSlice.reducer;
