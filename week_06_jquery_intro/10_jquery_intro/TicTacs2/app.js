$(document).ready(function() {
	
	var currentTurn = "X";

	// will this variable work? 
	var square = $(".ttt-square")


	$(document).on("click", ".ttt-square", function() {
		if ($(this).html() === "") {
			if (currentTurn === "O") {
				$(this).html("O");
				currentTurn = "X";
			} else {
				$(this).html("X");
				currentTurn = "O";
			}

			$(this).html(currentTurn);
		} else {
			return false;
		}
	});






});