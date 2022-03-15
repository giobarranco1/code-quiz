//Array of objects which have keys question, options and correct ans . 
var quizList = [{
        question: "Which programming language is primarily used for documents to be displayed in a web browser?",
        options: ["JavaScript", "Java", "HTML", "Python"],
        answer: "HTML"
    },
    {
        question: "Which method reverses the order of items of an array? ",
        options: ["sort(order)", "push(order)", "reverse()", "None of the above"],
        answer: "reverse()"
    },
    {
        question: "What best describes what console.log() does?",
        options: ["Prints variables defined before or after its called", "Creates a new cosnole", "Logs all the information in file", "None of the above"],
        answer: "Prints variables defined before or after its called"
    },
    {
        question: "Which programming language is best used to develop interactive web applications?",
        options: ["CSS", "Javascript", "HTML", "CSS"],
        answer: "Javascript"
    },
    {
        question: "Which JS built in function returns the function that created this object's instance? ",
        options: ["constructor()", "toFixed()", "toString()", "valueOf()"],
        answer: "constructor()"
    },

];

console.log("First question", quizList[4]);
console.log("Second question", quizList[1].question);
