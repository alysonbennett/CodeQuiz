// This code will walk the user through the questions and display their score at the end
var score = 0;
var index = 0;
var timeLeft = 75;
var timer;
var penalty = 10;
// When the user clicks the "Start Quiz" button, start timer at 75 seconds that is displayed at the top right of the screen

startQuiz.addEventListener("click", function () {
    startBody.classList.add('hide')
    quizBody.classList.remove('hide')
    initialsInp.classList.remove("hide")

    Timer();
    startQuestions();
});

// Display quiz questions
function startQuestions() {
    // Clear content on index.html
    quizBody.innerHTML = "";

    var questionEl = document.createElement('h3');
    questionEl.textContent = questions[index].title;

    quizBody.appendChild(questionEl);


    // For loop to go through questions array
    for (var i = 0; i < questions[index].choices.length; i++) {
        // Append question and choices

        var btn = document.createElement('button')
        btn.textContent = questions[index].choices[i]
        btn.classList.add("btn")
        btn.onclick = check

        quizBody.appendChild(btn)
    }
}

function check() {
    var selected = this.textContent;
    var correct = questions[index].answer
    // var feedbackEl = document.createElement('div');

    if (selected === correct) {
        score++;
        // feedbackEl.textContent = "Correct!"
    } else {
        timeLeft -= penalty
    }

    index++;
    if (index < questions.length) {
        startQuestions();
    } else {
        endGame();
        saveHighScores();
    }
}

// After all questions have been answered, display "All done!" with "Your final score is: " and input box for initials, with submit button
function endGame() {
    clearInterval(timer);

    quizBody.classList.add('hide');
    scoreBody.classList.remove('hide')

    scoreEl.textContent = timeLeft;
}

function saveHighScores () {
    var initials = document.querySelector("#initialsInp".value.trim());

    if (initials !== "") {
        var highscores =
        JSON.parse(window.localStorage.getItem("#highscores")) || [];
        console.log(highscores)
        var newScore = {
            "score": timeLeft,
            "initials": initials
        };

        
            highscores.push(newScore);
        window.localStorage.setItem ("#highscores", JSON.stringify(highscores));
        window.location.href = "HighScores.html";
        
    }
}

// Function to clear the high scores when the "Clear High Scores" button is clicked
function clearSpan(){
    document.querySelector("#highscores").innerHTML=""
}

clearHighScores.addEventListener("click", function() {
    clearSpan();
})