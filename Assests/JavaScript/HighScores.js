// This code will take the users intials and high scores and display them in the HighScores.html

var sortedList = highscoreArr.sort(function(a, b){
    return b.score - a.score
})

for(var i = 0; i < sortedList.length; i++){
    var li = document.createElement('li')
    li.textContent = sortedList[i].initials + ": " + sortedList[i].score

    highScores.appendChild(li)
}