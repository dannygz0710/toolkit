import { decrement, increment, incrementByAmount } from './store/slices/counter'
import { useAppDispatch, useAppSelector } from './store/store';

function App() {
const dispatch = useAppDispatch()
const counter = useAppSelector((state)=> state.counter.value)

  return (
    <>
     
      <h1>{counter}</h1>
      <div className="card">
        <button onClick={()=> dispatch(increment())}>
          increment
         </button>
        <button onClick={()=> dispatch(decrement())}>
          decrement
         </button>
        <button onClick={()=> dispatch(incrementByAmount(2))}>
          increment by amount
         </button>
         
       
      </div>
     
    </>
  )
}

export default App
