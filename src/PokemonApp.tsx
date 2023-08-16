import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "./store/store";
import { getPokemons } from "./store/slices/pokemon";
import { decrement, increment } from "./store/slices/counter";

export const PokemonApp = () => {
  const dispatch = useAppDispatch();

  const data = useAppSelector((state) => state.pokemons);
  const counter = useAppSelector((state) => state.counter.value);

  useEffect(() => {
    dispatch(getPokemons(counter));
  }, [dispatch, counter]);

  const { results } = data;


  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      <ul>
        {results.map(({ name }) => (
          <li key={name}>{name} </li>
        ))}
      </ul>
      <div style={{ display: "flex", gap: "10px" }}>
      <button  onClick={() => dispatch(decrement())}>decrement</button>
      <button  onClick={() => dispatch(increment())}>increment</button>
      </div>
    </>
  );
};
