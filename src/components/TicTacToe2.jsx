import { useState } from "react";

const createBoard = (size = 3) => {
  const board = [];
  for (let i = 0; i < size; i++) {
    board.push([...Array(size)]);
  }
  return board;
};

const checkVertical = (board, move) => {
  let isValid = false;
  for (let c = 0; c < board.length; c++) {
    isValid = board.every((row) => {
      return row[c] === move;
    });
    if (isValid) break;
  }
  return isValid;
};

const checkHorizontal = (board, move) => {
  let isValid = false;
  board.forEach((row) => {
    if (isValid) return;
    isValid = row.every((cell) => cell === move);
  });
  return isValid;
};

const checkDiagonalLeftToRight = (board, move) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i][i] !== move) return false;
  }

  return true;
};

const checkDiagonalRightToLeft = (board, move) => {
  const size = board.length;
  for (let i = 0; i < size; i++) {
    if (board[i][size - 1 - i] !== move) return false;
  }
  return true;
};

const checkPlayerWon = (board, move) => {
  const isFilledVertical = checkVertical(board, move);
  const isFilledHorizontal = checkHorizontal(board, move);
  const isFilledDiagonalOne = checkDiagonalLeftToRight(board, move);
  const isFilledDiagonalTwo = checkDiagonalRightToLeft(board, move);

  return (
    isFilledVertical ||
    isFilledHorizontal ||
    isFilledDiagonalOne ||
    isFilledDiagonalTwo
  );
};

// eslint-disable-next-line react/prop-types
const TicTacToe2 = ({ size = 3 }) => {
  const [board, setBoard] = useState(createBoard(size));
  const [currPlayer, setCurrPlayer] = useState("x");

  const handlePlayerMove = (r, c) => {
    board[r][c] = currPlayer;
    setBoard([...board]);
    if (checkPlayerWon(board, currPlayer)) {
      console.log(`Player ${currPlayer} won!!!`);
    }
    setCurrPlayer(currPlayer === "x" ? "y" : "x");
  };

  return (
    <div>
      {board.map((row, r) => {
        return (
          <div key={r} style={{ border: "solid 1px red", display: "flex" }}>
            {row.map((cell, c) => (
              <div
                style={{
                  border: "solid 1px white",
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                key={c}
                onClick={() => handlePlayerMove(r, c)}
              >
                {cell}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default TicTacToe2;
