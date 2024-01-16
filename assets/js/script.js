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

    document.getElementById("answer-box").value= "";
    document.getElementById("answer-box").focus();

    //Create two random num between 1 and 25 /
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
    if (gameType === "addition") {
        displayAdditionQuestion(num1,num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);    
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
        alert("You got it right!");
        incrementScore();
    } else {
        alert(`Awww you answered ${userAnswer}. The correct answer was ${calculateAnswer[0]}`);
        incrementWrongAnswer();
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
    } else if (operator === "x") {
        return[operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else {
       alert(`Unimplement operator ${operator}`)
       throw `Unimplement operator ${operator}`;
    }
}

function incrementScore() {
   let oldscore= parseInt(document.getElementById("score").innerText);
   document.getElementById("score").innerText= ++oldscore;
}

function incrementWrongAnswer() {
    let oldscore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldscore;
}

function displayAdditionQuestion(operand1, operand2) {
  document.getElementById('operand1').textContent= operand1;
  document.getElementById('operand2').textContent = operand2;
  document.getElementById('operator').textContent = "+";  
}

function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent= operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = "-";
}
function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "x";
}

function displayDivisionQuestion() {

}