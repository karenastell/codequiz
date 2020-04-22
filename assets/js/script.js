// script for index.html

var timeEl = document.querySelector(".timer");
var questionEl = document.querySelector(".instructions");
var indexHeading = document.querySelector(".index-heading");
var startBtn = document.querySelector(".start-btn");
var choiceBtns = document.querySelector(".choice-btns");

var secondsLeft = 90;


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

// hides the choice buttons until a question comes up
$(".choice-btns").hide();

// timer function
// function setTime() {
//     var timerInterval = setInterval(function () {
//         secondsLeft--;
//         timeEl.textContent = "Time Left: " + secondsLeft;

//         if (secondsLeft === 0) {
//             clearInterval(timerInterval);
//             questionEl.textContent = "Time Is Up!"
//             $(".choice-btns").hide();

//         }

//     }, 1000);
// }



// function to display questions
function displayQuestions() {

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time Left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            questionEl.textContent = "Time Is Up!"
            $(".choice-btns").hide();

        }

    }, 1000);


    $(".choice-btns").show();
    index = Math.floor(Math.random() * allQuestions.length);
    choice = allQuestions[index];
    questionEl.innerHTML = choice.question;

    $(".btn1").text(choice.answers[0]);
    $(".btn2").text(choice.answers[1]);
    $(".btn3").text(choice.answers[2]);
    $(".btn4").text(choice.answers[3]);
    console.log("choice.correctAnswer" + choice.correctAnswer);

    $(".btn1").on("click", function () {
        if (0 === choice.correctAnswer) {
            $(".grade").text("Correct!");
        } else {
            $(".grade").text("Wrong!");
            secondsLeft - 10;
        }
    })

    $(".btn2").on("click", function () {
        if (1 === choice.correctAnswer) {
            $(".grade").text("Correct!");
        } else {
            $(".grade").text("Wrong!");
            secondsLeft - 10;
        }
    })

    $(".btn3").on("click", function () {
        if (2 === choice.correctAnswer) {
            $(".grade").text("Correct!");
        } else {
            $(".grade").text("Wrong!");
            secondsLeft - 10;
        }
    })

    $(".btn4").on("click", function () {
        if (3 === choice.correctAnswer) {
            $(".grade").text("Correct!");
        } else {
            $(".grade").text("Wrong!");
            secondsLeft - 10;
        }
    })
    //  }
    //i++
    // console.log("end of function" + i);

};



startBtn.addEventListener("click", function () {
    displayQuestions();
    setTime();

    $(".start-btn").hide();

});







// script for highscores.html

var highScores = document.querySelector(".high-scores");
var backBtn = document.querySelector(".go-back");
var clearBtn = document.querySelector(".clear-score");

// backBtn.addEventListener("click", function () {
//     location.href = "index.html"
// });

// clearBtn.addEventListener("click", function (event) {
//     event.preventDefault();
//     localStorage.clear();
// });



