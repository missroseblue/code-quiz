var questions = [
{
    q: "How do you write 'Hello World' in an alert box?", 
    c: ["msg('Hello World')", "msgBox('Hello World');", "alertBox('Hello World');", "alert('Hello World');"],
    a: 3},
{
	q: "What would be the result of 3+2+'7'?",
    c: ["327", "14", "57", "12"],
    a: 2},

{
	q: "Where is the correct place to insert the link to the Javascript file?",
    c: ["The <body> section", "The <header> section", "The <footer> section", "The <head> section"],
    a: 0},

{
    q: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    c: [" alertBox(“Hello DataFlair!”);", "alert(Hello DataFlair!);", "msgAlert(“Hello DataFlair!”);", "alert(“Hello DataFlair!”);"],
    a: 3},

{
    q: "How do you find the minimum of x and y using JavaScript?",
    c: ["min(x,y);", " Math.min(x,y)", "Math.min(xy)", "min(xy);"],
    a: 1},
]


var options = document.getElementsByClassName("choices")[0];

var btn0 = document.createElement("button");
btn0.innerHTML = "btn0"
options.appendChild(btn0);


var btn1 = document.createElement("button");
btn1.innerHTML = "btn1"
options.appendChild(btn1);

var btn2 = document.createElement("button");
btn2.innerHTML = "btn2"
options.appendChild(btn2);

var btn3 = document.createElement("button");
btn3.innerHTML = "btn3"
options.appendChild(btn3);


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

start-btn.addEventListener("click", startQuiz)
*/
