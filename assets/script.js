var quizQuestions = $("#quiz-questions");
var timer = $("#timer");
var btnStart = $("#btn-start");
var timecounter = $("#timecounter");
var titleitem = $("#title-item");
var nextQuestions 
var questionanswers = $("#question-answers");
var myScore = $("#score");
var btnScore = $("#btnScore");
var currentindex = 0;
var score = 0;
var count = 75;
var alert =$("alert");
var info = $("info");
var allScores = [];
var storedScores = JSON.parse(localStorage.getItem("userData"));
var questions = [
    {
        title: "Commonly used data type Do Not include:---",
        choices: ["strings","booleance","alerts", "numbers"],
        answer : "alerts"    
    },
    {
        title: "The condition in an if/else statement is enclosed within:---",
        choices: ["quotes","Curly brackets","parentheses", "square brackets"],
        answer : "parentheses"    
    },
    {
        title: "Arrays in JavaScript can be used to store:---",
        choices: ["numbers and strings","others Arrays","booleances", "all of the above"],
        answer : "all of the above"    
    },
    {
        title: "String values must be enclosed within --- when being assigned to variables ",
        choices: ["commas","curly brackets","quotes","parentheses"],
        answer : "quotes"    
    },
    {
        title: "A very useful tool used during development and debugging for printing content to the debugger is:---",
        choices: ["JavaScript","terminal/bash","alerts", "console.log"],
        answer : "console.log"    
    },
]
btnStart.on("click", startQuiz);
function startQuiz(){
    if(storedScores !==null) {
        allScores = storedScores;
    }
    info.hide();
    btnStart.hide();
    timecounter.show();
    quizQuestions.show();
    nextQuestions= questions[currentindex]
    console.log(nextQuestions.title)
    
        Question(nextQuestions)

    gametime()
}
btnScore.on("click" , function(){
    let name = $("inputScore").value
    scorePage(name, count)
});
// Time set

function gametime(){

    var timeinterval = setInterval(function(){
        timer.innerText = count
         count--;
        }, 1000);

}

function scorePage(a, b) {

    var userData = {
        inits: a,
        userScore: b
    };
    allScores.push(userData);

    localStorage.setItem("userData", JSON.stringify(allScores));
    location.href = "score.html";
}

function Question(question){
    titleitem.innerText=question.title
    question.choices.forEach(element => {
     var button =$("button")
    button.className="btn-primary btn-block text-left"
    button.innerText=element
    questionanswers.appendChild(button)
    button.on("click", nextQuestion)
    });
}


function nextQuestion(e){
    currentindex++
    if(currentindex < questions.length){
        correction(e.target.innerText == nextQuestions.answer)
        questionanswers.innerHTML=""
        if(currentindex < questions.length){    
            nextQuestions= questions[currentindex]
            Question(nextQuestions)  
        }else {
            currentindex = 0
            Question(nextQuestions)  
        }

    }else{
        console.log("endgame")
        endgame()
        

    }
    
     
}
function correction(response){
    
    if(response){
        alert.innerText= "Good"
        console.log("Good")
    }else {
        alert.innerText="Wrong"
        count = count -15
        timer.innerHTML = count
        console.log("Wrong")

    }
    setTimeout(function(){
        alert.innerText=""
    
        }, 1000);

}
 function endgame (){
    // btnStart.classList.add("d-none")
    myScore.innaText = count
    addscore.classList.remove("d-none")
    timecounter.classList.add("d-none")
    quizQuestions.classList.add("d-none")
    addscore.classList.remove("d-none")


 }