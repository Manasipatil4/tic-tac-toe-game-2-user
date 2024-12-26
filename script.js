let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

const statusText = document.getElementById("status");
const cells = document.querySelectorAll(".cell");

function makeMove(index) {
  if (board[index] === "" && !gameOver) {
    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;
    checkWinner();
    if (!gameOver) {
      togglePlayer();
    }
  }
}

function togglePlayer() {
  if (!gameOver) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusText.textContent = `Player ${currentPlayer}'s turn`;
  }
}

function checkWinner() {
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
      gameOver = true;
      statusText.textContent = `Player ${currentPlayer} wins!`;
      setTimeout(() => {
        alert(`Player ${currentPlayer} wins!`);
        resetGame();
      }, 1000);
      return;
    }
  }
  if (!board.includes("")) {
    gameOver = true;
    statusText.textContent = "It's a draw!";
    setTimeout(() => {
      alert("It's a draw!");
      resetGame();
    }, 1000);
  }
}
function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;
  statusText.textContent = `Player X's turn`;
  cells.forEach((cell) => (cell.textContent = ""));
}
