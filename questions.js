// This code will walk the user through the questions and display their score at the end

// Declare variables
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if/else statement is enclosed within ____",
        choices: ["quotes", "curly brackets", "paentheses", "square brackets"],
        answer: "parentheses",
    },
    {
        title: "Arrays in JavaScript can be used to store ___",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above",
    },
    {
        title: "String vales must be enclosed within ___ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenteses"],
        answer: "quotes",
    },
    {
        title: "A very useful tool during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal/bash", "for loops", "console log"],
        answer: "console log",
    },
];

var score;
var timeLeft = 75;
var timer;
var penalty = 10;
var countdownClock = document.querySelector("#CountdownClock")
var quizBody = document.querySelector("#quizBody");
var choicesList = document.createElement("choicesUL")

// When the user clicks the "Start Quiz" button, start timer at 75 seconds that is displayed at the top right of the screen

countdownClock.addEventListener("click", function() {

       var timerInterval = setInterval(function() {
           secondsLeft--;
           countdownClock.textContent = secondsLeft

           if(secondsLeft === 0) {
               clearInterval(timerInterval);
               endGame();
           }
       }, 1000);

       startQuestions();

});

// Display quiz questions

function startQuestions () {
    // Clear content on index.html
    quizBody.innerHTML = "";
    choicesList.innerHTML = "";
    // For loop to go through questions array
    for (var i = 0; i < questions.length; i++) {
        
    }
}

// If user selects the right answer, show comment "Correct!" and move onto next question

// If user selects the wrong answer, show comment "Incorrect", subract 10 seconds from the timer and move onto the next question

// After all questions have been answered, display "All done!" with the users final score

// Also, have input line for their intials with a "Submit" button, with two buttons below that say "Go Back" and "Clear Highscores"

