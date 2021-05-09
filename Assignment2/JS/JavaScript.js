const time = document.querySelector('#time');
const scored = document.querySelector('#scored');
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const form = document.querySelector('form');
const report = document.querySelector('#report');

let timer = 60;

form.startButton.addEventListener('click', startGame);

function checkAnswer(e) {
    e.preventDefault();
    const correctAnswer = Number(num1.innerText) + Number(num2.innerText);  
    const guess = form.answerBox.value;
    if (guess == correctAnswer) {
        report.innerText = "Correct!";
        makeRandomNumbers();
        increaseScore();
        if(rangeCount == 5){
            increaseRandomRange();
        }
    }
    else {
        report.innerText = "Wrong! Try again...";
		timeEnd();
    }
}

makeRandomNumbers();
function makeRandomNumbers() {
    const first = makeRandomNumber();
    const second = makeRandomNumber();
    num1.innerText = first;
    num2.innerText = second;
}

function makeRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

function increaseRandomRange() {
    1 += 100;
    rangeCount = 0;
}

function score() {
    count = 0;
    rangeCount = 0;
    scored.innerText = count;
}

function increaseScore() {
    count += 1;
    rangeCount += 1;
    scored.innerText = count;
}

function timed() {
    timer -= 1;
    time.innerText = timer;

    if (timer <= 0){
        clearInterval(countdown);
        report.innerText = "Your time has run out";
    }
}

function timeEnd() {
    timer -= 5;
}

function startGame() {
    score();
    countdown = setInterval(timed, 500);
    form.enterButton.addEventListener('click', checkAnswer);
    form.restartButton.addEventListener('click', restart);
}

function restart() {
    if(timer <= 0)
    {
        countdown = setInterval(timed, 500);
    }
    timer = 60;
    score();
    makeRandomNumbers();
    report.innerText = "Restarted!";
}