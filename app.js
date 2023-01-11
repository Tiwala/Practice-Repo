// timer

const timer = document.body.querySelector('.timer');
const startButton = document.body.querySelector('.start');
const stopButton = document.body.querySelector('.stop');
const resetButton = document.body.querySelector('.reset');

let timerValue = 0;
timer.innerText = timerValue;
let startTimer;

startButton.addEventListener('click', () => {
    console.log('click')
    if (!startTimer) {
        startTimer = setInterval(() => {
            timerValue += 1;
            timer.innerText = timerValue;
            console.log(timerValue)
        }, 1000)
    }
})

stopButton.addEventListener('click', () => {
    clearInterval(startTimer)
    startTimer = null;
})

resetButton.addEventListener('click', () => {
    timerValue = 0;
    timer.innerText = timerValue;
    clearInterval(startTimer);
})