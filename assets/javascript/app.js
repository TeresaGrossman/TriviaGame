$(document).ready(function() { 
//create a function that creates the start button and initial screen

    //Global variables
    var correct = 0;
    var incorrect = 0;
    var unanswered = 0;
    var sec = 30;
    var queuePos = 0;
    var x;

    //create an array with questions, possible answers and corrAnswer
    var questions = [
        q1 = {
            q: "Which star is at the center of our Solar System?",
            a1: "Vega",
            a2: "Sirius",
            a3: "Sun",
            a4: "Altair",
            correctAnswer: "Sun"
        },
        q2 = {
            q: "How much time do sun rays take to reach Earth?",
            a1: "15 minutes",
            a2: "8 minutes",
            a3: "4 minutes",
            a4: "20 minutes",
            correctAnswer: "8 minutes"
        },
        q3 = {
            q: "Which planet is nearest to the Earth?",
            a1: "Uranus",
            a2: "Saturn",
            a3: "Venus",
            a4: "Mercury",
            correctAnswer: "Mercury"
        },
        q4 = {
            q: "Which planet is known as the Morning Star or Evening Star?",
            a1: "Mercury",
            a2: "Saturn",
            a3: "Venus",
            a4: "Jupiter",
            correctAnswer: "Venus"
        },
        q5 = {
            q: "What is the orbital period of the moon?",
            a1: "30 days",
            a2: "29 days",
            a3: "27 days",
            a4: "26 days",
            correctAnswer: "27 days"
        },
        q6 = {
            q: "How much more does the Sun weigh than the Earth?",
            a1: "287,000",
            a2: "300,000",
            a3: "333,000",
            a4: "350,000",
            correctAnswer: "333,000"
        },
        q7 = {
            q = "When will Halley's Comet become visible again from Earth?",
            a1: "2055",
            a2: "2058",
            a3: "2061",
            a4: "2065",
            correctAnswer: "2061"
        },
        q8 = {
            q = "When was the Solar System formed?",
            a1: "4.0 billion years ago",
            a2: "4.6 billion years ago",
            a3: "5.0 billion years ago",
            a4: "5.6 billion years ago",
            correctAnswer: "4.6 billion years ago"
        },
        q9 = {
            q = "Which planet spins backwards relative to the others?",
            a1: "Mercury",
            a2: "Saturn",
            a3: "Venus",
            a4: "Jupiter",
            correctAnswer: "Venus"
        },
        q10 = {
            q = "What is the largest planet in our Solar System?",
            a1: "Mercury",
            a2: "Saturn",
            a3: "Venus",
            a4: "Jupiter",
            correctAnswer: "Jupiter"
        }
        
    ];
    //Write a function to display the questions jQuery
       
    function displayQ() {

		
		$("#question").html(questions[queuePos].q);
		$("#a1").html("<button>" + questions[queuePos].a1 + "</button>");
		$("#a2").html("<button>" + questions[queuePos].a2 + "</button>");
		$("#a3").html("<button>" + questions[queuePos].a3 + "</button>");
		$("#a4").html("<button>" + questions[queuePos].a4 + "</button>");

	}
    //write a function to display the answers jQuery
	function displayAnswer() {
		
		if (sec === -1) {
			$("#question").html("You ran out of time!");
			$("#a1").html("The correct answer is:");
			$("#a2").html(questions[queuePos].correctAnswer);
			$("#a3").empty();
			$("#a4").empty();
			unanswered++;
		}
		else if ($(this).text() === questions[queuePos].correctAnswer) {
			$("#question").html("Correct!");
			$("#a1").html("The answer is:");
			$("#a2").html(questions[queuePos].correctAnswer);
			$("#a3").empty();
			$("#a4").empty();
			correct++;
		}
		else if ($(this).text() != questions[queuePos].correctAnswer) {
			$("#question").html("Incorrect!");
			$("#a1").html("The correct answer is:");
			$("#a2").html(questions[queuePos].correctAnswer);
			$("#a3").empty();
			$("#a4").empty();
			incorrect++;
		}

		queuePos++;
		clearInterval(x);
		sec = 30;
		x = setTimeout(displayQ, 3000);
		x = setTimeout(gameTimer, 3000);

	}

	function displayResults() {
		$("#question").empty();
		$("#a1").html("Correct Answers: " + correct);
		$("#a2").html("Incorrect Answers: " + incorrect);
		$("#a3").html("Unanswered: " + unanswered);
		$("#a4").empty();
		$("#time-left").empty();		
	}

	function gameTimer() {
		if (queuePos === questions.length) {
			displayResults();
			return;
		}
		$("#time-left").html("<h2>Time remaining: 20</h2>");
		x = setInterval(function () {
			$("#time-left").html("<h2>Time remaining: " + sec + "</h2>");
			sec--;
			if (sec === -1) {
				clearInterval(x);
				displayAnswer();
				sec = 30;
			}
		}, 1000);

	}

	$("#start").on("click", function () {
		gameTimer();
		displayQ();
	});

	$("#a1").on("click", displayAnswer);
	$("#a2").on("click", displayAnswer);
	$("#a3").on("click", displayAnswer);
	$("#a4").on("click", displayAnswer);
});
    
   
    
    
    