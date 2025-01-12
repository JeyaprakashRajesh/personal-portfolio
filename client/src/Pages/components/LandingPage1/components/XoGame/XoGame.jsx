import { useState } from "react";
import "./XoGame.css";
import cross from "@images/LandingPage/xo/cross.png";
import circle from "@images/LandingPage/xo/circle.png";

export default function XoGame() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningCombination, setWinningCombination] = useState([]); // Track winning cells

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinningCombination(combo);
        return board[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isX ? "X" : "O";
    setBoard(newBoard);
    const win = checkWinner(newBoard);

    if (win) {
      setWinner(win);
      setTimeout(() => {
        resetGame();
      }, 1000); 
    } else {
      setIsX(!isX);
    }
    if(board[0] !== null,board[1] !== null,board[2] !== null,board[3] !== null,board[4] !== null,board[5] !== null,board[6] !== null,board[7] !== null,board[8] !== null){
      resetGame()
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsX(true);
    setWinner(null);
    setWinningCombination([]);
  };

  return (
    <div className="x-o-game-container">
      <div className="x-o-game-inner-container">
        {board.map((cell, index) => (
          <div
            key={index}
            className={`x-o-game-${index + 1}`}
            onClick={() => handleClick(index)}
          >
            {cell && (
              <section
                className={`x-o-game-image ${
                  winningCombination.includes(index) ? "flashing-symbol" : ""
                }`}
                style={{
                  backgroundImage:
                    cell === "X" ? `url(${cross})` : `url(${circle})`,
                }}
              ></section>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
