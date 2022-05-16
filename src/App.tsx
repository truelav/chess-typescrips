import React, { useEffect, useState } from 'react';
import { Board } from './models/Board';
import BoardComponent from './components/BoardComponent'

import './App.css';

function App() {

  const [board, setBoard] = useState(new Board())

  useEffect( () => {
    restart()
  }, [])

  function restart(){
    const newBoard = new Board()
    newBoard.initCells()
    setBoard(newBoard)
    console.log(newBoard)
  }

  return (
    <div className="App">
      <BoardComponent board={board} setBoard={setBoard}/>
    </div>
  );
}

export default App;
