const boxes = document.querySelectorAll(".box");
const err = document.getElementById("err");
const playerOne = "🏐";
const playerTwo = "⚽";
let counter = 1;
winner = "";
let board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

function checkWin() {
  const checkLine = (a, b, c) => a === b && b === c && a !== "";

  for (let i = 0; i < 3; i++) {
    if (checkLine(board[i][0], board[i][1], board[i][2])) {
      winner += board[i][0];
    }
    if (checkLine(board[0][i], board[1][i], board[2][i])) {
      winner += board[0][i];
    }
  }
  if (checkLine(board[0][0], board[1][1], board[2][2])) {
    winner += board[0][0];
  }
  if (checkLine(board[0][2], board[1][1], board[2][0])) {
    winner += board[0][2];
  }
  if (winner === playerOne || winner === playerTwo) {
    err.textContent = `Player ${winner} wins!`;
    clearBoard(board);
    return;
  }
}

function clearBoard(board) {
  for (let i = 0; i < board.length; i++) {
    board[i].fill("");
  }
}

const addSymbol = (box, i, j) => {
  const currentPlayer = counter % 2 === 0 ? playerTwo : playerOne;
  box.innerText = currentPlayer;
  board[i][j] = currentPlayer;
};

boxes.forEach((box, index) => {
  const i = Math.floor(index / 3);
  const j = index % 3;
  box.addEventListener("click", (event) => {
    if (board[i][j] === "") {
      addSymbol(event.target, i, j);
      counter++;
      if (counter > 4) {
        checkWin();
      }
    }
  });
});
