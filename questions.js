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
var countdownClock = document.querySelector("#CountdownClock");
var quizBody = document.querySelector("#quizBody");
var choicesList = document.createElement("#choicesUL");
var startButton = document.querySelector("#startQuiz");

// When the user clicks the "Start Quiz" button, start timer at 75 seconds that is displayed at the top right of the screen

startButton.addEventListener("click", function() {

       var timerInterval = setInterval(function() {
           secondsLeft--;
           countdownClock.textContent = secondsLeft;

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
    // Append question and choices
        var userQuestions = questions.title;
        var userChoices = questions.choices;
        quizBody.textContent = userQuestions;

        

        // I know this aint right but my brain hurt.....

        choicesList createElement("li")
        questions appendChild
        somethingsomething .addEventListener("click", (compare))
    }
}

function compare(event) {
// If the users choice matches the answer, return "Correct!" and bottom of div and move on to next question
    var sure = event.target;
    if (sure.matches(//this thing)) {
        //some shit
        createElement.textContent = ("Correct!");
    }
    
    // If the users choice does not match, return "Incorrect" at bottom of div, subtract 10 seconds from timer, and move onto next qustion

    else {
        timer = timeLeft - penalty;
        createElement.textContent = ("Nope");
    }


}

// After all questions have been answered, display "All done!" with "Your final score is: " and input box for initials, with submit button
function endGame () {
    quizBody.innerHTML = "";
    choicesList.innerHTML = "";
    
    var allDoneH1 = document.createElement("h1");
    allDoneH1.textContent = ("All Done!");

    var doneScore = document.createElement("p");
    doneScore.textContent = ("Your final score is: " + timer);

    var enterInitials = document.createElement("input");
    enterInitials.//how do I create a text box thingy?
    enterInitials.textContent = //that thing above

    // Submit button... cuz that's a fun thing
    var submit = document.createElement("button");
    submit.//some other shit
    submit.textContent = "Submit"


// After submit, display thier score with their initials, and buttons that "Go Back" and "Clear High Scores"
// bring thru...
doneScore
enterInitials

var goBack = document.createElement("goBackButton");
var clearHighScores = document.createElement("clearHighScores");

//put in your local storage here to link to HighScores.html---do you really need that other js file? Cuz it be cool if ya didnt


