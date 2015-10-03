var score = 0;
var scoreBoard = document.getElementById("score")

document
	.getElementById("increase-5")
	.addEventListener("click", function() {
    	score += 5;
    	scoreBoard
			.innerHTML = score + " Points";
});

document
	.getElementById("decrease-5")
	.addEventListener("click", function() {
		if (score >= 5) {
			score -= 5;
		} else { 
			score -=5;
    		
    		scoreBoard
				.innerHTML = score + " Points";
	}
});

document
	.getElementById("submit-custom-score")
	.addEventListener("click", function() {
		var newScore = document.getElementById("custom-score").value;
		score = parseInt(newScore);

		document.getElementById("custom-score").value = "";
    	scoreBoard
			.innerHTML = score + " Points";
	});



// function changeScore() {
// 	document
// 		.getElementById("score")
// 		.innerHTML = score + " Points";
// }


// scoreBoard
// 	.innerHTML = score + " Points";