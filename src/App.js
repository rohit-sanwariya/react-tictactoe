import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { calculateWinner } from "./components/Helpers";
import History from "./components/History";
import StatusMessage from "./components/StatusMessage";

import "./styles/Root.scss";

function App() {
  
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isNext: true },
  ]);
  const [currentmove, setCurrentmove] = useState(0);

  const current = history[currentmove];

  const {winner,winningSquares} = calculateWinner(current.board);



  const handlerSquareClick = (position) => {
    if (current.board[position] || winner) {
      return;
    }
    setHistory((prev) => {
      const last = prev[prev.length - 1];

      const nextBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isNext ? "X" : "0";
        } 
        else return square;
      });
      return prev.concat({ board: nextBoard, isNext: !last.isNext });
    });
    setCurrentmove((prev) => prev + 1);
  };

const moveTo = (move) =>{
  setCurrentmove(move);
  setCurrentmove(0);
}

const onNewGame = () =>{
 setHistory([
  { board: Array(9).fill(null), isNext: true },
])
setCurrentmove(0)
}

  return (
    <div className="app">
      <h1>Tic <span className="text-green"> Tac </span>Toe</h1>
      <StatusMessage winner={winner} current={current}/>
     
      <Board winningSquares={winningSquares} board={current.board} handlerSquareClick={handlerSquareClick} />
      <button type="button" className={`btn-reset ${winner ?'active':''}`} onClick={onNewGame}>Start New Game</button>
      <History history={history} 
      currentmove = {currentmove}
      moveTo={moveTo}/>
    </div>
  );
}

export default App;
