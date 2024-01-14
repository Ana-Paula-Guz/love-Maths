document.addEventListener("DOMContentLoaded", function() {
let buttons= document.getElementsByTagName("button");
for (let button of buttons) {
    button.addEventListener("click", function() {
        if (this.getAttribute("data-type")=== "submit") {
            checkAnswer();
        } else {
           let gameType= this.getAttribute("data-type")
           runGame(gameType);
        }
    })
}

   runGame("addition");
})

function runGame(gameType) {
    //Create two random num between 1 and 25 /
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    if (gameType === "addition") {
        displayAdditionQuestion(num1,num2);
    } else {
        alert (`Unknown game Type: ${gameType}`)
        throw `Unknown game Type: ${gameType}`;
    }
}

/**Check the users answer and compare it to the correct answer */
function checkAnswer() {
    let userAnswer= parseInt(document.getElementById("answer-box").value);
    let calculateAnswer= calculateCorrectAnswer();
    let isCorrect= userAnswer === calculateAnswer[0];

    if (isCorrect) {
        alert("You got it right!")
    } else {
        alert(`Awww you answered ${userAnswer}. The correct answer was ${calculateAnswer[0]}`);
    }
    runGame(calculateAnswer[1]);
}

/**Gets the operands and the operator directly form the dom and returns correct answers */
function calculateCorrectAnswer() {
    let operand1= parseInt(document.getElementById("operand1").innerText);
    let operand2 = parseInt(document.getElementById("operand2").innerText);
    let operator= document.getElementById("operator").innerText;

    if (operator === "+") {
        return[operand1 + operand2, "addition"];
    } else {
       alert(`Unimplement operator ${operator}`)
       throw `Unimplement operator ${operator}`;
    }
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
  document.getElementById('operand1').textContent= operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = "+";  
}

function displaySubtractQuestion() {

}
function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}