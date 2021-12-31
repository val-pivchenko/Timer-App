const durationInput = document.querySelector('#duration');
const startBtn = document.querySelector('#start');
const pauseBtn = document.querySelector('#pause');
const resetBtn = document.querySelector('#reset');
const circle = document.querySelector('circle');
const completedText = document.querySelector('.completedText');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);


let duration;

const timer = new Timer(durationInput, startBtn, pauseBtn, {
    onStart(totalDuration) {
        completedText.classList.remove('show');
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset', perimeter * timeRemaining / duration - perimeter);
    },
    onComplete() {
        completedText.classList.add('show');
    }
});

