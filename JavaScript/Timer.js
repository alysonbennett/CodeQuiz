function Timer() {
    timer = setInterval(function () {
        timeLeft--;
        CountdownClock.textContent = timeLeft;

        if (timeLeft === 0) {
            endGame();
        }
    }, 1000);
}