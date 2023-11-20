const userScore = document.querySelector("#Score");
const questionStorage = document.querySelector("#Question-Storage");
const buttonsContainer = document.querySelector(".buttons");
const questionsList = [
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
];
document.querySelector('.Start-Button').addEventListener('click', startQuiz);
document.getElementById('submit').addEventListener('click', showResults);

var score = 0;
var trackIndex = 0;
const totalQuestions = questionsList.length; //does this link to const questionslink???
const totalTime = 1000; 
let timeLeft = totalTime;
userScore.textContent = "Your Score" + score;

function startQuiz() {
	showQuestions();
	startTimer();
}
//COMMAS are what SEPARATES
//trackIndex is a variable
//variables are containers for storing data...
//trackIndex is....

// const cars = ["BMW", "Volvo", "AMG"]
// BMW is 0, Volvo is 1, AMG is 2.
//Index always starts at zero.
//Index is a number, that number is the location of their placement in the array.

function showQuestions() {
	if (trackIndex < totalQuestions && timeLeft > 0) { 
		questionStorage.textContent = questionsList[trackIndex].question //runs a 
		buttonsContainer.textContent = "" 

		questionsList[trackIndex].choices.forEach(function (choice, index) { //for each value
			const button = document.createElement("button") //it creates a button
			button.textContent = choice;

			button.addEventListener("click", function () { //adds an EventListener to listen for clicks.
				evaluateAnswer(index)
			});
			buttonsContainer.appendChild(button) //creates an empty string
		});
	} else {
		clearInterval(timer); //here
		showResults()
	}	
}

//textContent is a DOM manipulation. 
//index is the number we put in to grab the choice


function evaluateAnswer(index) {
	if (questionsList[trackIndex].choices[index] === questionsList[trackIndex].rightanswer) {
		score++;
		console.log("correct");
		userScore.textContent = "Your Score: " + score; //why is there a space inside ""?
		//Aesthetics, it adds a space.
	} else {
		timeLeft -= 30;
	}
//checks if your answer is the right answer, it adds 1 to your score.
// if you are wrong it takes off 30s.
	trackIndex++;

	if (trackIndex < totalQuestions && timeLeft > 0) {
		showQuestions();
	} else {
		clearInterval(timer); //here
		showResults();
	}
}

function showResults() {
	const resultsContainer = document.getElementById("showResults");
	resultsContainer.innerHTML = "";

	const initialsForm = document.createElement("form");
	initialsForm.innerHTML = `
		<label for="initials">Enter your initials:</label>
		<input type="text" id="initials" name="initials" required>
		<button type="submit">Save Score</button>
	`;
//creates a container for results. Gets live put into the index.html.
//STUDY DOM MANIPULATION.

	const saveScore = (event) => {
		event.preventDefault();
		const initialsInput = document.getElementById("initials").value;
		localStorage.setItem(initialsInput, score);
		alert("Score saved!");
	};

	initialsForm.addEventListener("submit", saveScore);
	resultsContainer.appendChild(initialsForm);

	questionStorage.textContent = "Quiz Completed";
	buttonsContainer.innerHTML = "";
}



//this is DOM MANIPULATION
//IF TIME IS >0, IT WILL SHOW THE ACTIVE TIME
//IF TIME=0, IT SAYS TIMES UP AND SHOWS RESULTS.
function startTimer() {
	const timerElement = document.getElementById("counter");
	const updateTimer = () => {
		if (timeLeft > 0) {
			timeLeft--;
			timerElement.textContent = `Time left: ${timeLeft}s`;
		} else {
			clearInterval(timer); //here
			timerElement.textContent = "Time's up!";
			showResults();
		}
	};
//sets the timer. interval is a 1000.
	const timer = setInterval(() => {
		updateTimer();
		if ((trackIndex + 1) === totalQuestions) { //if index reaches 5, its done, sin
			clearInterval(timer); //here
			showResults();
		}
	}, 1000);
}

//since index STARTS at the number zero, to make it ON PAR with the TOTAL QUESTIONS/LENGTH/AKA NO.
//ITEMS IN AN ARRAY, 1 is added to make it on par with each other.

//Fix DOM Manipulation in index.html
//timerElement `` vs "" figure out
