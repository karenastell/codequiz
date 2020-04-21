// script for index.html

var timeEl = document.querySelector(".timer");
var questionEl = document.querySelector(".instructions");
var indexHeading = document.querySelector(".index-heading");
var startBtn = document.querySelector(".start-btn");




var secondsLeft = 90;

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






var questions = [
    {
        question: "No one can feed garbage to pigs without first obtaining a permit.",
        answers: ["Arizona", "California", "New Hampshire", "Mississippi"],
        correctAnswer: 0
    },

    {
        question: "A frog that dies during a frog-jumping contest cannot be eaten and must be destroyed as soon as possible.",
        answers: ["Oregon", "Rhode Island", "California", "Florida"],
        correctAnswer: 2
    },
    {
        question: "Every legislator, public officer, and lawyer must take an oath stating that they have not fought a duel with deadly weapons.",
        answers: ["Kentucky", "Ohio", "Pennsylvania", "North Carolina"],
        correctAnswer: 0
    },
    {
        question: "Singing or playing only part of the national anthem or remixing it as dance music is punishable by a fine of not more than $100.",
        answers: ["Tennessee", "Texas", "Massachusetts", "South Carolina"],
        correctAnswer: 2
    },
    {
        question: "Profanity in public could land a person in jail for up to 30 days. It's illegal for anyone to use vulgar or obscene language in the presence of two or more people.",
        answers: ["Vermont", "Michigan", "Wyoming", "Mississippi"],
        correctAnswer: 3
    },
    {
        question: "It's illegal to carry away or collect seaweed at night.",
        answers: ["New Hampshire", "Alaska", "Rhode Island", "Florida"],
        correctAnswer: 0
    },
    {
        question: "Leaving a container of urine or fecal matter on the side of the road is a Class A misdemeanor. And you can't throw it from the vehicle either.",
        answers: ["Maine", "Oregon", "Delaware", "West Virginia"],
        correctAnswer: 1
    },

    {
        question: "Someone who bites off another person's limb will face no more than 20 years in prison (but no less than one) — and only if they maimed the victim on purpose.",
        answers: ["Oklahoma", "Louisiana", "Rhode Island", "Minnesota"],
        correctAnswer: 2
    },
    {
        question: "We know that kids can be annoying but please remember that it is a felony to sell your children.",
        answers: ["Wisconsin", "Florida", "Nevada", "New York"],
        correctAnswer: 1
    },
    {
        question: "Any person who attempts to pass off margarine, oleo, or oleomargarine as real butter is guilty of a simple misdemeanor and is punishable by up to 30 days in jail and a $625 fine.",
        answers: ["Ohio", "New Jersey", "Maryland", "Iowa"],
        correctAnswer: 3
    }
];


function displayQuestions() {
    startBtn.style.display = "none";
    index = Math.floor(Math.random() * questions.length);
    choice = questions[index];
    questionEl.innerHTML = choice.question;

    for (var i = 0; i < choice.answers.length; i++) {
        console.log(choice.answers[i]);

    }
};


startBtn.addEventListener("click", function () {
    displayQuestions();
    setTime();
});







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



