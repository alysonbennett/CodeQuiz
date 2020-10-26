// This code will walk the user through the questions and display their score at the end
var score = 0;
var index = 0;
var timeLeft = 75;
var timer;
var penalty = 10;

// When the user clicks the "Start Quiz" button, start timer at 75 seconds that is displayed at the top right of the screen
startQuiz.addEventListener("click", init);
clearHighScores.addEventListener("click", clearSpan);
addInit.addEventListener("click", saveHighScores)

function init() {
    startBody.classList.add('hide')
    quizBody.classList.remove('hide')
    feedback.classList.remove('hide')

    Timer();
    startQuestions();
}

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

// Check if the what the user selected is correct or wrong, and show feedback below question
function check() {
    var selected = this.textContent;
    var correct = questions[index].answer
    var feedbackEl = document.querySelector("#feedback");

    if (selected === correct) {
        score++;
        feedbackEl.textContent = "Correct!";
    } else {
        timeLeft -= penalty
        feedbackEl.textContent = "Wrong";
    }

    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
        feedbackEl.setAttribute("class", "feedback hide");
        index++;
        if (index < questions.length) {
            startQuestions();
        } else {
            endGame();
        }
    }, 1000);
}

// After all questions have been answered, display "All done!" with "Your final score is: " and input box for initials, with submit button
function endGame() {
    clearInterval(timer);

    quizBody.classList.add('hide');
    scoreBody.classList.remove('hide')
    feedback.classList.add('hide')

    scoreEl.textContent = timeLeft;
}

function saveHighScores() {
    // var initials = document.querySelector("#initialsInp".value.trim());
    var initials = initialsInp.value.trim();

    if (!initials) return;

    var newScore = {
        "score": timeLeft,
        "initials": initials
    };

    highscoreArr.push(newScore);
    setScores();

    location.href = "HighScores.html";
}

// Function to clear the high scores when the "Clear High Scores" button is clicked
function clearSpan() {
    highscores.innerHTML = ""
}


// $.ajax({
//     method: "GET",
//     url: "http:somthing"
// }).then(function (res) {

// }).catch(function (err) {

// })

// $.get("http:somthing")
//     .then(function (res) {

//     }).catch(function (err) {

//     })

// axios({
//     method: "GET",
//     url: "http:somthing"
// }).then(function (res) {

// }).catch(function (err) {

// })

// axios.get("http:somthing")
//     .then(function (res) {

//     }).catch(function (err) {

//     })

// var myvar;

// setTimeout(function () {
//     myvar = "hello"
// }, 20)

// console.log(myvar)

// function getMsg() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             myvar = "hello"

//             resolve("hello")
//         }, 1000)
//     })
// }

// getMsg()
//     .then(function (msg) {
//         console.log(msg)
//     })
//     .catch(function (err) {
//         console.log(err)
//     })