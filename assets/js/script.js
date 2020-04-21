// script for index.html

var timeEl = document.querySelector(".timer");
var questionEl = document.querySelector(".instructions");
var indexHeading = document.querySelector(".index-heading");
var indexBtn = document.querySelector(".index-btn");




var secondsLeft = 30;

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time Left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            //sendMessage();
        }

    }, 1000);
}

// function sendMessage() {
//   timeEl.textContent = " ";

//   var imgEl = document.createElement("img");

//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

setTime();




// script for highscores.html

var highScores = document.querySelector(".high-scores");
var backBtn = document.querySelector(".go-back");
var clearBtn = document.querySelector(".clear-score");

backBtn.addEventListener("click", function (event) {
    event.preventDefault();
    location.href = "index.html"
});

clearBtn.addEventListener("click", function (event) {

    event.preventDefault();
    localStorage.clear();
});

