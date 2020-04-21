// script for index.html

var timeEl = document.querySelector(".timer");

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