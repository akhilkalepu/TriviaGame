$(document).ready(function () {
// ------------------------Q/A ARRAY------------------------
var trivia = [{
        question: "When was the War of 1812?",
        choices: ["1776", "1812", "1813", "1912"],
        answer: 1
    },
    {
        question: "How many hydrogen atoms are in a water molecule?",
        choices: ["One", "Two", "Three", "None"],
        answer: 1
    },
    {
        question: "Mixing blue and yellow makes what color?",
        choices: ["Red", "Light Blue", "Orange", "Green"],
        answer: 3
    },
    {
        question: 'Who wrote "War and Peace"?',
        choices: ["Noam Chomsky", "Mark Twain", "Leo Tolstoy", "Maya Angelou"],
        answer: 2
    },
    {
        question: "What is the capital of Burkina Faso?",
        choices: ["Ouagadougou", "Monrovia", "Lagos", "Kinshasa"],
        answer: 0
    },
    {
        question: "What is the definition of obnubilate?",
        choices: ["To inhale through the nose.", "To weave in and out.", "To liquify by applying heat.", "To darken or obscure something."],
        answer: 3
    },
    {
        question: "How long is a lightyear?",
        choices: ["642 billion hours", "5.9 trillion miles", "3.14 quadrillion miles", "6,537 years"],
        answer: 1
    },
    {
        question: "Who invented the internet?",
        choices: ["Al Gore", "Jeff Bezos", "Tupac Shakur", "H.P. Lovecraft"],
        answer: 2
    }
];

// ------------------------VARIABLES------------------------
var userChoice = "";

var seconds = 10;
var intervalId;

var right = 0;
var wrong = 0;
var unanswered = 0;

// ------------------------GAME FUNCTIONS------------------------
$("#score-sheet").hide();
$("#reset-box").hide();
$("#quiz-box").hide();

i = 0;

$("#start-btn").on("click", function () {
    $("#start-box").hide();
    $("#quiz-box").slideToggle();
});
$("#start-btn").on("click", quizfunction);

function quizfunction() {
    ask();
    time();
}
    function ask () {
        $(".question-box").text(trivia[i].question);
        $("#choice1").text(trivia[i].choices[0]);
        $("#choice2").text(trivia[i].choices[1]);
        $("#choice3").text(trivia[i].choices[2]);
        $("#choice4").text(trivia[i].choices[3]);
    }
    function time () {
        seconds = 10;
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $(".time-remaining").text(seconds);
    }
    function decrement() {
        seconds--;
        $(".time-remaining").text(seconds);
        if (seconds === 0) {
            unanswered++;
            roundfunction();
        }
    }

// ------------------------CHOICE BUTTONS------------------------
$("#choice1").on("click", function () {
    userChoice = 0;
    if (userChoice === trivia[i].answer) {
        right++;
    } else {
        wrong++;
    }
    roundfunction();
});
$("#choice2").on("click", function () {
    userChoice = 1;
    if (userChoice === trivia[i].answer) {
        right++;
    } else {
        wrong++;
    }
    roundfunction();
});
$("#choice3").on("click", function () {
    userChoice = 2;
    if (userChoice === trivia[i].answer) {
        right++;
    } else {
        wrong++;
    }
    roundfunction();
});
$("#choice4").on("click", function () {
    userChoice = 3;
    if (userChoice === trivia[i].answer) {
        right++;
    } else {
        wrong++;
    }
    roundfunction();
});

// ------------------------ROUND FUNCTION------------------------
function roundfunction() {
    popup();
    roundtime();
}
    function popup () {
        $(".time-box").hide();
        $(".form").hide();
        $("#quiz-box").prepend("<h3 id='popuptext'>Question is unanswered.</h3>");
        i++;
    }
    function roundtime () {
        seconds = 3;
        clearInterval(intervalId);
        intervalId = setInterval(rounddecrement, 1000);
    }
    function rounddecrement() {
        seconds--;
        if ((seconds === 0) && (i < trivia.length)) {
            $("#popuptext").hide();
            $(".time-box").show();
            $(".form").show();
            userChoice = "";
            quizfunction();
        }
        if ((seconds === 0) && (i === trivia.length)) {
            scoresheet();
        }
    }

// ------------------------SCORE SHEET------------------------
function scoresheet () {
    $("#popuptext").hide();
    $("#score-sheet").show();
    $("#rightscore").text(right);
    $("#wrongscore").text(wrong);
    $("#unscore").text(unanswered);
    $("#reset-box").show();
    userChoice = "";
    i = 0;
}

$("#reset-btn").on("click", function () {
    right = 0;
    wrong = 0;
    unanswered = 0;
    $("#reset-box").hide();
    $("#score-sheet").hide();
    $("#quiz-box").show();
});
$("#reset-btn").on("click", quizfunction);

// ------------------------------------------------
});