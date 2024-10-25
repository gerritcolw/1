let divisor, dividend;

function generateQuestion() {
    divisor = Math.floor(Math.random() * 12) + 1; // 除數範圍：1 - 12
    let quotient = Math.floor(Math.random() * 10) + 1; // 商範圍：1 - 10
    dividend = divisor * quotient; // 被除數 = 除數 * 商

    document.getElementById('question').innerText = `What is ${dividend} ÷ ${divisor}?`;
    document.getElementById('result').innerText = '';
    document.getElementById('answer').value = '';
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer').value);
    let correctAnswer = dividend / divisor;

    if (userAnswer === correctAnswer) {
        document.getElementById('result').innerText = 'Correct! Great job!';
        document.getElementById('result').style.color = 'green';
    } else {
        document.getElementById('result').innerText = `Incorrect. The correct answer is ${correctAnswer}.`;
        document.getElementById('result').style.color = 'red';
    }
}

window.onload = generateQuestion;
