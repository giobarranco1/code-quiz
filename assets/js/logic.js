//
var startButton = document.getElementById("start-quiz");
var submitButton = document.getElementById("submit");

var index = 0;
var time = 60;
var timerInterval;
var playerScore = 0;
//get previos scores 
var previousScores = JSON.parse(localStorage.getItem("scorecard")) || []; 
console.log(previousScores);
//Quiz Start here 
function showStuff() {
    //show quiz Section 
    document.getElementById("quiz-screen").style.display = 'block';
    //hide start Section 
    document.getElementById("start-screen").style.display = 'none';

    displayQA();

    console.log("Starting the clock ");
    //start timer 
    timerInterval = setInterval(clockCountdown, 1000);
}

function displayQA() {
    console.log("current index", index);
    console.log("Array Length", quizList.length);
    //display the Question and options text 
    document.getElementById("question-text").textContent = quizList[index].question;

    document.getElementById("option-one").textContent = quizList[index].options[0];
    document.getElementById("option-two").textContent = quizList[index].options[1];
    document.getElementById("option-three").textContent = quizList[index].options[2];
    document.getElementById("option-four").textContent = quizList[index].options[3];

    //Add Event listeners 
    document.getElementById("option-one").addEventListener("click", rightWrongAns);
    document.getElementById("option-two").addEventListener("click", rightWrongAns);
    document.getElementById("option-three").addEventListener("click", rightWrongAns);
    document.getElementById("option-four").addEventListener("click", rightWrongAns);

}

function rightWrongAns() {

    console.log("button clicked is ", this.textContent);

    var buttonValue = this.textContent;
    if (quizList[index].answer === buttonValue) {
        document.getElementById("text").textContent = "Correct Answer!";
        playerScore = playerScore + 10; 
    } else {
        document.getElementById("text").textContent = "Wrong Answer!";
        //10 seconds peanlity 
        time = time - 10;
    }

    //move to the next question 
    index = index + 1;

    //if i run out of questions then  
    if (index === quizList.length) {
        //game over 
        document.getElementById("end-screen").style.display = "block";
        document.getElementById("quiz-screen").style.display="none";
        //stop the clock 
        clearInterval(timerInterval);
    } else {
        //display the next question 
        displayQA();
    }


}
//in
function clockCountdown() {
    //reduce it by one second
    time = time - 1;
    document.getElementsByClassName("timer")[0].textContent = "Time remaining : " + time;
    if (time <= 0){
        //STOP THE CLOCK 
        clearInterval(timerInterval);
        time = 100; 
        // document.getElementsByClassName("timer")[0].textContent = "Time remaining : " + time;
        //END THE QUIZ 
        document.getElementById("end-screen").style.display = "block";
        document.getElementById("quiz-screen").style.display="none";
    }
}

//adding the score to local storage
function addScore() {
    //grab score
    var playerName = document.getElementById("initials").value;
    var playerInfo = {
        name: playerName,
        score: playerScore,
    }
    console.log(playerInfo), previousScores;
    //append the new playerInfo to the previous score list 
    previousScores.push(playerInfo) 
    localStorage.setItem("scorecard", JSON.stringify(previousScores));
    console.log(previousScores);
    //Navigate to the highscores.html 
    window.location.href = "highscores.html";
}

function displayScores() {
    // var highScores = document.getElementById("highscores");
    // highScores.textContent = previousScores;
    var text = "";
    previousScores.forEach(myFunction);
    document.getElementById("listItems").innerHTML = text;
    function myFunction(item, index) {
        text += index + ": " + item + "<br>"; 
      }

}
//Add Event listener 
startButton.addEventListener("click", showStuff);
submitButton.addEventListener("click", addScore); 