import React from 'react';
import './App.css';
import Board from './components/Board/Board';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div className="App">
      <Header/>
      <Board/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
