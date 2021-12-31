class Timer {
    constructor(durationInput, startBtn, pauseBtn, callbacks) {
        this.durationInput = durationInput;
        this.startBtn = startBtn;
        this.pauseBtn = pauseBtn;
        this.resetBtn = resetBtn;
        if (callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startBtn.addEventListener('click', this.start);
        this.pauseBtn.addEventListener('click', this.pause);
        this.resetBtn.addEventListener('click', this.reset);
    }

    start = () => {
        if (this.onStart) {
            this.onStart(this.timeRemaining);
        }
        this.tick();
        this.interval = setInterval(this.tick, 20);
    };

    pause = () => {
        clearInterval(this.interval);
    };

    reset = () => {
        completedText.classList.remove('show');
        this.durationInput.value = 0;
        circle.setAttribute('stroke-dashoffset', this.perimeter);
    };

    tick = () => {
        if (this.timeRemaining <= 0) {
            if (this.onComplete) {
                this.onComplete();
            }
            this.pause();
        } else {
            this.timeRemaining = this.timeRemaining - 0.02;
            if (this.onTick) {
                this.onTick(this.timeRemaining);
            }
        }
    };

    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time) {
        this.durationInput.value = time.toFixed(2);
    }
}