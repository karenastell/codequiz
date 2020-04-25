// script for index.html

var timeEl = document.querySelector(".timer");
var indexHeading = document.querySelector(".index-heading");
var startBtn = document.querySelector(".start-btn");
var choiceBtns = document.querySelector(".buttons");


var secondsLeft = 0;
var currentQuestionIndex = 0;
$(".timer").text("Time left: " + secondsLeft);
$(".buttons").hide();
$(".questions").hide();
$(".name-input").hide();
//var name = nameInput.value;

var allQuestions = [
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

function endGame() {
    $(".questions").text("Game Over!");
    $(".buttons").hide();
    $(".name-input").show() + "Enter Your Initials";
    // save the time first for high scores

}

function startTime() {
    secondsLeft = 75;
    $(".timer").text("Time Left: " + secondsLeft);
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time Left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endGame();
        }

    }, 1000);

};


var i = 0;
function displayQuestions() {


    $(".questions").text(allQuestions[i].question);

    $(".btn0").text(allQuestions[i].answers[0]);
    $(".btn1").text(allQuestions[i].answers[1]);
    $(".btn2").text(allQuestions[i].answers[2]);
    $(".btn3").text(allQuestions[i].answers[3]);

    // console.log(i);
};


function checkAnswers() {
    var buttonClicked = event.target;
    var choosenAsnwerIndex = buttonClicked.getAttribute("data-index");

    console.log("choosenAnswerIndex", choosenAsnwerIndex);
    console.log("correct answer" + allQuestions[i].correctAnswer);
    $(".grade").show();
    if (choosenAsnwerIndex == allQuestions[i].correctAnswer) {
        //alert("correct!");         
        $(".grade").text("Correct!");
    } else {
        //alert("wrong!")
        $(".grade").text("Wrong!");
        if (secondsLeft > 10) {
            secondsLeft = secondsLeft - 10;
        } else {
            secondsLeft = 1;
        }
    }
    setTimeout(function () {
        $(".grade").hide();
    }, 1000);
    i++;
    if (i == 10) {
        endGame();
    } else {
        displayQuestions();
    }
}
var nameInput = $(".name").value;
console.log(nameInput);



function saveScore(secondsLeft) {
    var scoreObject = {
        score: secondsLeft,
        name: nameInput
    }
    var scores = getScoresFromLS();
    scores.push(scoreObject);
    var scoresJSON = JSON.stringify(scores);
    localStorage.setItem("scores", scoresJSON);

}

function getScoresFromLS() {
    var scores = localStorage.getItem("scores");
    if (scores) {
        return JSON.parse(scores);
    } else {
        return [];
    }
}




$(".start-btn").on("click", function () {
    $(".intro").hide();
    $(".start-btn").hide();
    $(".questions").show();
    $(".buttons").show();
    startTime();
    displayQuestions();
});

$(".buttons").on("click", checkAnswers);








