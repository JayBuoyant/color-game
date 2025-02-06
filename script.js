const colors = ["red", "blue", "green", "yellow", "orange", "purple"];
const colorBox = document.querySelector(".color-box");
const buttons = document.querySelectorAll(".color-btn");
const gameStatus = document.getElementById("gameStatus");
const scoreElement = document.getElementById("score");
const newGameButton = document.getElementById("newGameButton");

let targetColor = "";
let score = 0;

// Function to start a new game
function startGame() {
    targetColor = colors[Math.floor(Math.random() * colors.length)];
    colorBox.style.backgroundColor = targetColor;
    
    // Shuffle and assign colors to buttons
    let shuffledColors = [...colors].sort(() => Math.random() - 0.5);
    buttons.forEach((btn, index) => {
        btn.style.backgroundColor = shuffledColors[index];
        btn.dataset.color = shuffledColors[index];
    });

    gameStatus.textContent = "Make a guess!";
}

// Function to check the player's guess
function checkGuess(event) {
    const selectedColor = event.target.dataset.color;
    if (selectedColor === targetColor) {
        gameStatus.textContent = "Correct! 🎉";
        score++;
        scoreElement.textContent = score;
    } else {
        gameStatus.textContent = "Wrong! ❌ Try Again.";
    }
}

// Add event listeners to buttons
buttons.forEach(btn => btn.addEventListener("click", checkGuess));

// Restart game when "New Game" button is clicked
newGameButton.addEventListener("click", startGame);

// Start game on page load
startGame();
