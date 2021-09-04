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
    c: ["The body section", "The header section", "The footer section", "The head section"],
    a: "The body section"},

{
    q: "Which of the following will write the message “Hello DataFlair!” in an alert box?",
    c: [" alertBox(“Hello DataFlair!”);", "alert(Hello DataFlair!);", "msgAlert(“Hello DataFlair!”);", "alert(“Hello DataFlair!”);"],
    a: "alert(“Hello DataFlair!”);"},

{
    q: "How do you find the minimum of x and y using JavaScript?",
    c: ["min(x,y);", " Math.min(x,y)", "Math.min(xy)", "min(xy);"],
    a: " Math.min(x,y)"},
]
//variables
var renderQuestions = document.querySelector(".questions")
var options = document.querySelector(".choices")
var questionNumber = 0
var startBtn = document.querySelector("#start-btn")
var results = document.querySelector(".results")
var clock = document.querySelector(".timer")


//display questions
function createQuestion () {
    renderQuestions.innerHTML = ""
    options.innerHTML = ""
    var singleQuestion = document.createElement("h2", "center");   
    singleQuestion.innerHTML = questions[questionNumber].q;
    renderQuestions.appendChild(singleQuestion);
    for (var i = 0; i < questions[questionNumber].c.length; i++) {
        var btnChoices = document.createElement("button");
        btnChoices.innerHTML = questions[questionNumber].c[i]
        btnChoices.onclick = correctAnswer
        options.appendChild(btnChoices);
    } 
}
//validate answers and display message
function correctAnswer () {
    //console.log("clicked")
    //console.log(this.textContent)
    //console.log(questions[questionNumber].a)
    if (questions[questionNumber].a === this.textContent) {
        results.innerHTML = "You're right!" 
    } else {
        results.innerHTML = "You're wrong!"
    }
    questionNumber++;
    createQuestion()
}

function countdown() {
    var timeLeft = 60
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
            clock.textContent = timeLeft + " seconds remaining";
            timeLeft--;
        } else if (timeLeft === 1) {
            clock.textContent = timeLeft + " second remaining";
            timeLeft--;
        } else {
            clock.textContent = "";
            clearInterval(timeInterval)
        }
    })
}

startBtn.addEventListener("click", createQuestion)




























/*
var initials = document.querySelector('') //ASK

//save initials to localStorage
localStorage.setItem('initials', )


*/
