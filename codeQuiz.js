var quizQuestions = [
    {
        "title": "What is 1 + 1?",
        "options": ["1", "2", "3", "4"],
        "correct": "2"
        }, 
    {
        "title": "What is 2 + 2?",
        "options": ["2", "4", "6", "8"],
        "correct": "4"
        },
    {
        "title": "What is 3 + 3?",
        "options": ["2", "4", "6", "8"],
        "correct": "6"
    }

];
var secondsLeft = 60;
var holdInterval = 0;
var penalty = 10;

var currentTime = $("#currentTime");
var content = $("#content");
var holdQuestions =$("#holdQuestions");
var startTimer = $("#startTimer");

$("#startTimer").on("click", function() {
    if (holdInterval == 0) {
        holdInterval == setInterval(function(){
            secondsLeft--;
            currentTime.textContent = "Time remaining: " + secondsLeft;

    if (secondsLeft = 0) {
        clearInterval(holdInterval);
            finished();
            currentTime.textContent = "Time is up.";
    }
        })
    }
});
