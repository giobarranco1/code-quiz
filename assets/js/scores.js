var previousScores = JSON.parse(localStorage.getItem("scorecard")) || []; 

console.log(previousScores); 
for (let i=0; i<previousScores.length; i++){
    //console.log(previousScores[i]);
    var liTagELement = document.createElement("li"); 
    //console.log(liTagELement);
    liTagELement.textContent = "Name: " + previousScores[i].name + "   " + "Score: " + previousScores[i].score;
    document.getElementById("highscores").appendChild(liTagELement);
}