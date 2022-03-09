//
var startButton = document.getElementById("start-quiz");
var submitButton = document.getElementById("submit");

var index = 0;
var time = 20;
var timerInterval;
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
//function addScore() {

//}
//Add Event lIstener 
startButton.addEventListener("click", showStuff);
