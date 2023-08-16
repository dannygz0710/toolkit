import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from './slices/counter';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { pokemonSlice } from './slices/pokemon';

export const store = configureStore({
  reducer: {
   counter: counterSlice.reducer,
   pokemons: pokemonSlice.reducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector