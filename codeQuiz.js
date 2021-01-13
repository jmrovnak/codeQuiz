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


var sec = 5;
var time = setInterval(timer, 1000);

function timer() {
    document.getElementById('timer').innerHTML = sec;
    sec--;
    if (sec == -1) {
        clearInterval(time);
        console.log("Out of time.");
    }
}












