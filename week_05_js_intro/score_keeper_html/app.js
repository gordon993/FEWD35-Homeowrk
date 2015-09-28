id="score"

id="increase-5"
id="decrease-5"
id="custom-score"
id="submit-custom-score" 

var score = 0;

document
	.getElementById("increase-5")
	.addEventListener("click", function() {
    score += 5;
    changeScore();
});

document
	.getElementById("decrease-5")
	.addEventListener("click", function() {
	score -=5;
	changeScore();
});

document
	.getElementById("submit-custom-score")
	.addEventListener("click", function() {
		var newScore = document.getElementById("custom-score").value;
		score = parseInt(newScore);

		document.getElementById("custom-score").value = "";
		changeScore();
	});



function changeScore() {
	document
	.getElementById("score")
	.innerHTML = score + " Points";
}