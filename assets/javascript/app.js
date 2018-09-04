// ------------------------VARIABLES------------------------
var right = 0;
var wrong = 0;
var unanswered = 0;

var trivia = [{
        question: "When was the War of 1812?",
        choices: ["1776", "1812", "1813", "1912"],
        answer: "choice2"
    },
    {
        question: "How many hydrogen atoms are in a water molecule?",
        choices: ["One", "Two", "Three", "None"],
        answer: "choice2"
    },
    {
        question: "Mixing blue and yellow makes what color?",
        choices: ["Red", "Light Blue", "Orange", "Green"],
        answer: "choice4"
    },
    {
        question: "Who wrote str.italics(War and Peace)?",
        choices: ["Noam Chomsky", "Mark Twain", "Leo Tolstoy", "J.K. Rowling"],
        answer: "choice3"
    },
    {
        question: "What is the capital of Burkina Faso?",
        choices: ["Ouagadougou", "Monrovia", "Lagos", "Kinshasa"],
        answer: "choice1"
    },
    {
        question: "What is the definition of obnubilate?",
        choices: ["To inhale through the nose.", "To weave in and out.", "To liquify by applying heat.", "To darken or obscure something."],
        answer: "choice4"
    },
    {
        question: "How long is a lightyear?",
        choices: ["642 billion hours", "5.9 trillion miles", "3.14 quadrillion miles", "6,537 years"],
        answer: "choice2"
    },
    {
        question: "Who invented the internet?",
        choices: ["Al Gore", "Jeff Bezos", "Tupac Shakur", "H.P. Lovecraft"],
        answer: "choice3"
    }
];

// ------------------------------------------------

$(document).ready(function () {

// ------------------------START GAME------------------------
$("#quiz-box").hide();
$("#start-btn").click(function () {
    $("#quiz-box").slideToggle();
    $(this).hide();
});
// ------------------------QUESTIONS------------------------
var i = 0;
for (i = 0; i < trivia.length; i++) {
    $(".question-box").text(trivia[i].question);
    $("#choice1").text(trivia[i].choices[0]);
    $("#choice2").text(trivia[i].choices[1]);
    $("#choice3").text(trivia[i].choices[2]);
    $("#choice4").text(trivia[i].choices[3]);
};
// ------------------------ANSWERS------------------------
// var choice1 = document.getElementById("choice1");
// var choice2 = document.getElementById("choice2");
// var choice3 = document.getElementById("choice3");
// var choice4 = document.getElementById("choice4");

// var userChoice  = document.getElementById(onclick);

// if (userChoice === trivia[i].answer) {
//     alert("You are correct!");
// };
// ------------------------------------------------

});