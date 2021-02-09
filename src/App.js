import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import { calculateWinner } from "./components/Helpers";

import "./styles/Root.scss";

function App() {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isNext: true },
  ]);
  const [currentmove, setCurrentmove] = useState(0);

  const current = history[currentmove];

  const winner = calculateWinner(current.board);

  const message = winner
    ? `Winner is ${winner}`
    : `Next Player is ${current.isNext ? "X" : "0"}`;

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

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
     
      <Board board={current.board} handlerSquareClick={handlerSquareClick} />
    </div>
  );
}

export default App;
