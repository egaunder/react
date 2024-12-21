import { useState } from "react";

const getBoard = (size = 3) => {
  const board = [];
  for (let i = 0; i < size; i++) {
    board.push([...Array(size)]);
  }
  return board;
};

const checkPlayerWon = (board, move) => {
  let hasColumn = false;
  let hasRow = false;
  let firstDiagonal = true;
  let secondDiagonal = true;
  const size = board.length;

  // check each row
  board.forEach((row) => {
    if (hasRow) {
      return;
    }
    hasRow = row.every((boardMove) => {
      return boardMove === move;
    });
  });

  // check columns
  for (let col = 0; col < size; col++) {
    hasColumn = board.every((row) => {
      return row[col] === move;
    });
    if (hasColumn) {
      break;
    }
  }

  // check diagonal left to right
  for (let i = 0; i < size; i++) {
    if (board[i][i] !== move) {
      firstDiagonal = false;
      break;
    }
  }

  // check diagonal right to left
  for (let i = 0; i < size; i++) {
    if (board[i][size - 1 - i] !== move) {
      secondDiagonal = false;
      break;
    }
  }
  return hasColumn || hasRow || firstDiagonal || secondDiagonal;
};

// eslint-disable-next-line react/prop-types
const TicTackToe = ({ size = 3 }) => {
  const [board, setBoard] = useState(getBoard(size));
  const [currPlayer, setCurrPlayer] = useState("x");

  const handleCellClick = (row, col) => {
    board[row][col] = currPlayer;
    setBoard([...board]);
    if (checkPlayerWon(board, currPlayer)) {
      console.log("Yay it works");
    }
    setCurrPlayer(currPlayer === "x" ? "y" : "x");
  };

  return (
    <div>
      {board.map((row, r) => {
        return (
          <div key={r} style={{ display: "flex", border: "solid 1px red" }}>
            {row.map((cell, c) => (
              <div
                style={{
                  border: "solid white 1px",
                  height: "50px",
                  width: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={c}
                onClick={() => handleCellClick(r, c)}
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

export default TicTackToe;
