let currentPlayer = 'X';
let gameBoard = Array(9).fill('');

function makeMove(cell) {
    const index = Array.from(cell.parentElement.children).indexOf(cell);

    if (gameBoard[index] === '' && !checkWinner()) {
        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        document.getElementById('message').textContent = `Player ${currentPlayer}'s turn`;
        checkWinner();
    }
}

function checkWinner() {
    const winCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    for (const combination of winCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
            document.getElementById('message').textContent = `Player ${gameBoard[a]} wins!`;
            return true;
        }
    }

    if (gameBoard.every(cell => cell !== '')) {
        document.getElementById('message').textContent = 'It\'s a draw!';
        return true;
    }

    return false;
}

function resetGame() {
    gameBoard = Array(9).fill('');
    currentPlayer = 'X';
    document.getElementById('message').textContent = 'Player X\'s turn';
    const cells = document.getElementsByClassName('cell');
    for (const cell of cells) {
        cell.textContent = '';
    }
}

resetGame();  // Initialize the game

