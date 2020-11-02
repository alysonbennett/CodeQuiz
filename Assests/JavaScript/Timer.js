function Timer() {
    timer = setInterval(function () {
        timeLeft--;
        CountdownClock.textContent = timeLeft;

        if (!timeLeft) {
            endGame();
        }
    }, 1000);
}