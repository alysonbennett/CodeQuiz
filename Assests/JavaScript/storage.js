var highscoreArr;
var LS_KEY = "#scores"

getScores();

function setLocal(key, value){
    localStorage.setItem(key, JSON.stringify(value))
}
function getLocal(key){
    return JSON.parse(localStorage.getItem(key))
}
function setScores(){
    setLocal(LS_KEY, highscoreArr);
}
function getScores(){    
    highscoreArr = getLocal(LS_KEY) || [];
    console.log(highscoreArr)
}
