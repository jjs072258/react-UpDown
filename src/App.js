import React, { useState } from 'react';
import Board from './components/Board';
import Info from './components/Info';
import './App.css';

const App = () => {
  const [answer, setAnswer] = useState(0);
  const [history, setHistory] = useState([]);
  const changeAnswer = (value) => {
    setAnswer(value);
  };
  const addList = (list) => {
    setHistory([...history, list]);
  };
  return (
    <div className='App'>
      <div className='name'>Up & Down Game(1~100)</div>
      <div className='board'>
        <Board changeAnswer={changeAnswer} answer={answer} addList={addList}></Board>
      </div>
      <div className='info'>
        <Info history={history}></Info>
      </div>
    </div>
  );
};

export default App;
