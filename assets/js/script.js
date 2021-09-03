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

var score = 0;

//loop over every question object
for (var i = 0; i < questions.length; i++) {
    //display the current question ASK

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
start-btn.addEventListener("click", startQuiz)

