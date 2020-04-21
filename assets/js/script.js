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


var questionsAnswers = {

    questions: [
        "No one can feed garbage to pigs without first obtaining a permit.",
        "A frog that dies during a frog-jumping contest cannot be eaten and must be destroyed as soon as possible.",
        "Every legislator, public officer, and lawyer must take an oath stating that they have not fought a duel with deadly weapons.",
        "Singing or playing only part of the national anthem or remixing it as dance music is punishable by a fine of not more than $100.",
        "Profanity in public could land a person in jail for up to 30 days. It's illegal for anyone to use vulgar or obscene language in the presence of two or more people.",
        "It's illegal to carry away or collect seaweed at night.",
        "Leaving a container of urine or fecal matter on the side of the road is a Class A misdemeanor. And you can't throw it from the vehicle either.",
        "Someone who bites off another person's limb will face no more than 20 years in prison (but no less than one) — and only if they maimed the victim on purpose.",
        "We know that kids can be annoying but please remember that it is a felony to sell your children."




    ],

    answers: [
        "Arizona",
        "California",
        "Kentucky",
        "Massachusetts",
        "Mississippi",
        "New Hampshire",
        "Oregon",
        "Rhode Island",
        "Utah",
        "Florida"
    ],

    states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
};





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



