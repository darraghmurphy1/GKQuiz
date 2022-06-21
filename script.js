let correctAnswerTotal=0;
let incorrectAnswerTotal=0;
const timeLeft = 300;
const startButton = document.getElementById("quiz-btn");
const instructions = document.getElementById("rules-of-quiz");
const questionBox = document.getElementById("questions-container");

startButton.addEventListener("click", function() {
    instructions.setAttribute("class", "written-rules");
});

//  adding addEventfunction ( targeting the start quiz button inside instruction box  )
//instructionBox.classList.add("hide");
startQuiz.addEventListener("click", function() {
    instructions.classList.remove("written-rules");
    questionBox.setAttribute("class", "question-baskets");
    instructions.classList.add("hide");
    timeSecond = timeLeft;
});

// targeting timer in the questions
const timeH = document.querySelector('h3');
let timeSecond = TIMEOUT_SECONDS;

timeH.innerHTML = timeSecond;

setInterval(() => {
    timeSecond--;
    timeH.innerHTML = `${timeSecond} sec time remaining`;
    if (timeSecond <= 0) {
        //clearInterval(countDown);
        displayFinalScore();

    }
}, 1000);


document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getElementsById("quiz-btn")==="Rules"
            )
        })
    }

    
})


function runGame() {


}


function displayRules() {

}

function displayQuestion() {

}

function increaseScore() {

}

function increaseWrongScore() {

}




function displayFinalScore() {
    
}

// array of questions of the quiz. 

let questions = [{
    number: 1,
    question: "What was the name of the French football player who was infamously sent off in the 2006 World Cup Final?",
    answers: ["Thierry Henry", "Frank Ribery", "Zinedine Zidane", "William Gallas"],
    rightAnswer: "Zinedine Zidane",
},
{
    number: 2,
    question: "Indicate possible locations of coagulation in the treatment train",
    answers: ["Before storage", "Before filtration", "Before ozonation", "Before GAC"],
    rightAnswer: "Before storage",
},
{
    number: 3,
    question: "The only city to have hosted both the Summer and Winter Olympic Games is which of the following?",
    answers: ["Beijing", "Moscow", "Helsinki", "Montreal"],
    rightAnswer: "Beijing",
},
{
    number: 4,
    question: "Who was the first team to win the FA Cup?",
    answers: ["	Crystal Palace", "Maidenhead", "Queen's Park", "Wanderers"],
    rightAnswer: "Wanderers",
},
{
    number: 5,
    question: "Which has won the most Olympic medals in total?",
    answers: ["United Kingdom", "China", "United States", "France"],
    rightAnswer: "United States",
},
{
    number: 6,
    question: "Who won the very first UFC tournament (now known as UFC 1)?",
    answers: ["Ken Shamrock", "Royce Gracie", "Art Jimmerson", "Gerard Gordeau"],
    rightAnswer: "Royce Gracie",
},
{
    number: 7,
    question: "Who did Michael Schumacher win his first F1 World Drivers' Championship?",
    answers: ["Ferrari", "Benetton", "Jordan", "Minardi"],
    rightAnswer: "Benetton",
},
{
    number: 8,
    question: "Which tennis player has spent the longest amount of time at rank number 1 in mens?",
    answers: ["Novak Djokovic", "Rafael Nadal", "Roger Federer", "Pete Sampras"],
    rightAnswer: "Roger Federer",

},
{
    number: 9,
    question: "Who has won the most GAA All-Ireland Football Championships in a row?",
    answers: ["Kerry", "Dublin", "Cork", "Fermanagh"],
    rightAnswer: "Dublin",

},
{
    number: 10,
    question: "Which is the smallest area by population represented by a football team to win the European Cup/Champions League?",
    answers: ["Nottingham", "Belgrade", "Salzburg", "Porto"],
    rightAnswer: "Porto",
},
{
    number: 11,
    question: "Who is the only football player to have scored a goal in the Premier League, Championship, League One, League Two, FA Cup, League Cup, Football League Trophy, FA Trophy, UEFA Champions League, UEFA Europa League, Scottish Cup, Scottish League Cup and the Scottish Premier League?",
    answers: ["Billy Sharp", "Gary Hooper", "Tony Watt", "Steve Davis"],
    rightAnswer: "Gary Hooper",
},
{
    number: 12,
    question: "Who has won the most Golden Boot awards in the Italian top football division, Serie A?",
    answers: ["Gunnar Nordahl", "Ciro Immobile", "Michel Platini", "Zlatan Ibrahimović"],
    rightAnswer: "Gunnar Nordahl",
},
{
    number: 13,
    question: "In American Football, who is the Superbowl trophy named after?",
    answers: ["Paul Brown", "Marv Levy", "George Allen", "Vince Lombardi"],
    rightAnswer: "",
},
{
    number: 14,
    question: "The famous boxing match between Muhammad Ali and George Foreman known as 'The Rumble in the Jungle' took place where?",
    answers: ["Kinshasa, Zaire", "Lagos, Nigeria", "Libreville, Gabon", "Windhoek, Namibia"],
    rightAnswer: "Kinshasa, Zaire",
},
{
    number: 15,
    question: "Who was the first footballer to be bought for over £10,000,000?",
    answers: ["Alan Shearer ", "Jean-Pierre Papin", "Gianluca Vialli", "Ronaldo"],
    rightAnswer: "Jean-Pierre Papin",
},

];



