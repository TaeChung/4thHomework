var answerInput = document.querySelector("answer")
var addButton = document.querySelector("add")
var subtraction = document.querySelector("subtract")
var counter = document.querySelector("counter")
var userScore = document.querySelector("#Score")
var timer = document.querySelector("timer")
var startButton = document.querySelector(".Start-Button")
var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", showResults);
var Timer; 
var Score= 0
var trackIndex = 0
userScore.textContent=Score
var questionsList = [
	{
		question: "How old was Augustus when he formed and became part of the Second Triumvirate?",
		choices: ["31", "20", "38", "27",],
		rightanswer: "20"
	},
	{
		question: "How many denominations of Protestanism are there?",
		choices: ["30", "55", "800", "1000+",],
		rightanswer: "1000+"
	},
	{
		question: "During which Monarch's reign was the Hagia Sophia constructed?",
		choices: ["Augustus", "Aurelian", "Heraclius", "Justinian I",],
		rightanswer: "Justinian I"
	},
	{
		question: "Which Sultan conquered Istanbul/Constantinople?",
		choices: ["Mehmet II", "Suleiman", "Selim I", "Selim II",],
		rightanswer: "Mehmet II"
	},
	{
		question: "Which nation has the oldest standing structure in the world?",
		choices: ["Turkey-Gobekli Tepe", "Egypt-Pyramids of Giza", "Malta-The Megalithic Temples of Malta", "Greece-Parthenon",],
		rightanswer: "Turkey-Gobekli Tepe. It is around 9500-11000 years old."
	},
]

startButton.addEventListener("click", startQuiz)

function startQuiz() {
	showQuestions()
}


function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

	function showResults(questions, quizContainer, resultsContainer) {
		var resultsContainer = document.getElementById("results");
		resultsContainer.textContent = "Your Score: " + Score;

		trackIndex = "";
		Score = "";
		userScore.textContent = Score;
	}


	showQuestions(questions, quizContainer);


	submitButton.onclick = function () {
		showResults(questions, quizContainer, resultsContainer);
	}
}

function showQuestions() {
	var h3 = document.querySelector("#Question-Storage")
	h3.textContent = questionsList[trackIndex].question
	document.querySelector(".buttons").textContent=""
	questionsList[trackIndex].choices.forEach(function (choices) {
		var button = document.createElement("button")
		button.textContent = choices
		button.addEventListener("click", function(event){
			AITA(event)
		}) 
		document.querySelector(".buttons").append(button)
	})
}

function AITA(event) {
	console.log(event.target.textContent)
	if (event.target.textContent == questionsList[trackIndex].rightanswer){
		Score++
		console.log("correct")
		userScore.textContent = Score
	}
	trackIndex++
	showQuestions()
	
	

	// check comment
}

function checkScore(){
	
}

Timer = setInterval(function(){
	console.log(Score)
},1000) 