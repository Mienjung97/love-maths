// Wait for DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    // Better version to iterate over an object
    for (let button of buttons) {
        button.addEventListener("click", function() {
            // "this" checks which button was clicked and saves it as "this" in current function
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                // "this" is now assigning, which game is going to be played
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game "loop", called when the script is first loaded
 * and after user's answer has been processed
 */
function runGame() {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25 + 1 );
    let num2 = Math.floor(Math.random() * 25 + 1 );
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

} 

function incrementScore() {

} 

function incrementWrongAnswer() {

} 

function displayAdditionQuestion() {

} 

function displaySubtractionQuestion() {
    
} 

function displayMultiplyQuestion() {
    
} 

function displayDivisionQuestion() {
    
} 