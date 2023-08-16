import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store';
import { PokemonApp } from './PokemonApp.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PokemonApp />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>,
)
