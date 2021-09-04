//question, choices and answer array
var questions = [
{
    q: "How do you write 'Hello World' in an alert box?", 
    c: ["msg('Hello World')", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
    a: "alert('Hello World');"},
{
	q: "What would be the result of 3+2+'7'?",
    c: ["327", "14", "57", "12"],
    a: "57"},

{
	q: "Where is the correct place to insert the link to the Javascript file?",
    c: ["The <body> section", "The <header> section", "The <footer> section", "The <head> section"],
    a: "The <body> section"},

{
    q: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    c: [" alertBox(“Hello DataFlair!”);", "alert(Hello DataFlair!);", "msgAlert(“Hello DataFlair!”);", "alert(“Hello DataFlair!”);"],
    a: "alert(“Hello DataFlair!”);"},

{
    q: "How do you find the minimum of x and y using JavaScript?",
    c: ["min(x,y);", " Math.min(x,y)", "Math.min(xy)", "min(xy);"],
    a: " Math.min(x,y)"},
]

var renderQuestions = document.querySelector(".questions")
var options = document.querySelector(".choices")
var questionNumber = 0
var startBtn = document.querySelector("#start-btn")
var results = document.querySelector("#results")

function createQuestion () {
    renderQuestions.innerHTML = ""
    options.innerHTML = ""
    results.innerHTML = ""
    var singleQuestion = document.createElement("H2", "center");   
    singleQuestion.innerHTML = questions[questionNumber].q;
    renderQuestions.appendChild(singleQuestion);
    for (var i = 0; i < questions[questionNumber].c.length; i++) {
        var btnChoices = document.createElement("button");
        btnChoices.innerHTML = questions[questionNumber].c[i]
        btnChoices.onclick = correctAnswer
        options.appendChild(btnChoices); 
        
    } 
}

function correctAnswer () {
    console.log("clicked")
    console.log(this.textContent)
    console.log(questions[questionNumber].a)

    if (questions[questionNumber].a === this.textContent) {
        results.innerHTML = //console.log("correct")
    } else {
        console.log("wrong")
    }
    questionNumber++;
    createQuestion()
}

startBtn.addEventListener("click", createQuestion)




























/*
for (var i = 0; i < questionsArray.length; i++) {
    //display the current question ASK
var answers = confirm(questionsArray [i].q)
    //compare answers ASK
    if (
        (answer === true && questions[i].a === "t") ||
        (answer === false && questions[i].a === "f")
    ) {
        score++;
    alert("Correct!");
    } else {
        alert("Wrong!")
    }

}
/*
var questionNumber = document.createElement.questionsArray.q

function questionNumber(questionsArray) {

    questionNumber++,
    questionsArray.appendChild(questionNumber);

    
}


var score = 0;

//loop over every question object


var initials = document.querySelector('') //ASK

//save initials to localStorage
localStorage.setItem('initials', )


*/
