// This code will take the users intials and high scores and display them in the HighScores.html
addInit.addEventListener('click', function () {
    var initials = document.createElement('li')
    initials.textContent = initialsInp.value
    initialsInp.value = ''

    highscores.appendChild(initials)
})