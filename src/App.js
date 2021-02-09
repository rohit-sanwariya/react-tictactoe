
import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import { calculateWinner } from './components/Helpers';

import './styles/Root.scss'

function App() {
  const [board,setBoard]= useState(Array(9).fill(null));
    const [isNext,setisNext]= useState(false);

    const winner = calculateWinner(board);
    const message = winner ? `Winner is ${winner}` :`Next Player is ${isNext?'X':'0'}`

    const handlerSquareClick = (position) =>{
      if(board[position]||winner){
          return
      }
setBoard((prev)=>{
  
    return prev.map((square,pos)=>{
        if(pos === position){
            return isNext ? 'X':'0';
        }
       else return square;
    })
})
setisNext((prev)=>!prev)
    }


  return (
    <div className="app">
     <h1>Tic Tac Toe</h1>
    <h2>{message}</h2>
     <Board board={board} handlerSquareClick={handlerSquareClick}/>
    </div>
  );
}

export default App;
