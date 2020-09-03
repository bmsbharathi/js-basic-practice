const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');
const displayArea = document.querySelector('#watchDisplay');
let secondCount = 0;
let watch;

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

stopBtn.disabled = true;
resetBtn.disabled = true;

function startTimer() {

    startBtn.disabled = true;
    stopBtn.disabled = false;
    resetBtn.disabled = true;
    watch = setInterval(display, 1000);
}

function stopTimer() {

    clearInterval(watch);
    stopBtn.disabled = true;
    startBtn.disabled = false;
    resetBtn.disabled = false;
}


function resetTimer() {

    secondCount = 0;
    display();
    stopBtn.disabled = true;
    resetBtn.disabled = true;
}

function display() {

    let hours = Math.floor(secondCount / 3600);
    let minutes = Math.floor((secondCount % 3600) / 60);
    let seconds = Math.floor(secondCount % 60);

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    displayArea.textContent = `${hours} : ${minutes} : ${seconds}`;

    secondCount++;
}