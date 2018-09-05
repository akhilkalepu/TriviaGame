$(document).ready(function () {
// ------------------------VARIABLES------------------------
var userChoice = "";

var seconds = 30;
var intervalId;

var right = 0;
var wrong = 0;
var unanswered = 0;

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
        choices: ["Noam Chomsky", "Mark Twain", "Leo Tolstoy", "J.K. Rowling"],
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

// ------------------------GAME FUNCTIONS------------------------
$("#quiz-box").hide();

i = 0;

$("#start-btn").on("click", function () {
    $("#start-box").html("");
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
        seconds = 30;
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
        $(".time-remaining").text(seconds);
    }
    function decrement() {
        seconds--;
        $(".time-remaining").text(seconds);
        if (seconds === 0) {
            unanswered++;
            alert("Unanswered");
            userChoice = "";
            i++;
            quizfunction();
        }
    }

// ------------------------CHOICE BUTTONS------------------------
$("#choice1").on("click", function () {
    userChoice = 0;
    if (userChoice === trivia[i].answer) {
        right++;
        alert("Correct!");
        userChoice = "";
        i++;
        quizfunction();
    } else {
        wrong++;
        alert("Wrong!");
        userChoice = "";
        i++;
        quizfunction();
    }
});
$("#choice2").on("click", function () {
    userChoice = 1;
    if (userChoice === trivia[i].answer) {
        right++;
        alert("Correct!");
        userChoice = "";
        i++;
        quizfunction();
    } else {
        wrong++;
        alert("Wrong!");
        userChoice = "";
        i++;
        quizfunction();
    }
});
$("#choice3").on("click", function () {
    userChoice = 2;
    if (userChoice === trivia[i].answer) {
        right++;
        alert("Correct!");
        userChoice = "";
        i++;
        quizfunction();
    } else {
        wrong++;
        alert("Wrong!");
        userChoice = "";
        i++;
        quizfunction();
    }
});
$("#choice4").on("click", function () {
    userChoice = 3;
    if (userChoice === trivia[i].answer) {
        right++;
        alert("Correct!");
        userChoice = "";
        i++;
        quizfunction();
    } else {
        wrong++;
        alert("Wrong!");
        userChoice = "";
        i++;
        quizfunction();
    }
});

// ------------------------POPUP FUNCTION------------------------
// var roundseconds = 4;
// var roundId;

// function roundfunction() {
//     popup();
//     roundtime();
// }
//     function popup() {
//         $("#form").hide();
//         $("#quiz-box").html("<div>You are jkhjiuweaakbrjhdhkjh!</div>");
//     }
//     function roundtime() {
//         clearInterval(roundId);
//         roundId = setInterval(decrement, 1000);
//     }
//     function decrement() {
//         roundseconds--;
//         if (roundseconds === 0) {
//             stop();
//             alert("ASDFASDF");
//         }
//     }
//     function stop() {
//         clearInterval(roundId);
//     }

// ------------------------------------------------
});