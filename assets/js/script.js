// Wait for DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    // Better version to iterate over an object
    for (let button of buttons) {
        button.addEventListener("click", function() {
            // "this" checks which button was clicked and saves it as "this" in current function
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                // "this" is now assigning, which game is going to be played
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");
})

/**
 * The main game "loop", called when the script is first loaded
 * and after user's answer has been processed
 */
function runGame(gameType) {

    // Creates two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25 + 1 );
    let num2 = Math.floor(Math.random() * 25 + 1 );

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);        
    } else {
        alert(`Unknown game type: ${gameType}`);
        // throw is for showing error in console
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}


/**
 * Checks the anwer against the first element in the 
 * returned calculatedCorrectAnswer array
 */
function checkAnswer() {

    let userAnswer = parseInt(document.getElementById("answer-box").value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert("Hey, you got it right! :)");
    } else {
        alert(`Awww. you answered ${userAnswer}, the correct answer was ${calculatedAnswer[0]}!`);
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands (the numbers) and returns the operator (plus, minus, etc)
 * directly from the DOM, and returns the coreect answer
 */
function calculateCorrectAnswer() {
    // parseInt makes sure that the returned operand is an integer (default = string)
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
} 

function incrementScore() {

} 

function incrementWrongAnswer() {

} 

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
} 

function displaySubtractionQuestion() {
    
} 

function displayMultiplyQuestion() {
    
} 

function displayDivisionQuestion() {
    
} 