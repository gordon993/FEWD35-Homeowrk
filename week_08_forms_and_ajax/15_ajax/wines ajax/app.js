$(document).on("click", "#get-wine-data", function() {
	$.ajax({
		type: "GET",
		url: "http://daretodiscover.herokuapp.com/wines",
		success: function(wines) {
			for (var i = 0; i < wines.length; i++) {
				console.log(wines[i].name);
				console.log(wines[i].year);
				console.log(wines[i].price);
				console.log(wines[i].grapes);
				console.log(wines[i].country);
				console.log(wines[i].region);
				console.log(wines[i].description);
				console.log(wines[i].picture);
			}
		}
	});

});

	$(document).on("submit", "form", function(event) {
		event.preventDefault();

		var wineData = {
			name: $("input[name='name']").val(),
			year: $("input[name='name']").val(),
			price: $("input[name='price']").val(),
			grapes: $("input[name='grapes']").val(),
			country: $("input[name='country']").val(),
			region: $("input[name='region']").val(),
			description: $("textarea[name='description']").val(),
			picture: $("input[name='picture']").val(),
		};
		console.log(wineData);

		$,ajax({
			type: "POST",
			url: "http://daretodiscover.herokuapp.com/wines",
			data:wineData,
			success: function() {
				alert("Winea dded successfully!");
				$("form")[0].reset();
			},
			error: function() {
				alert("Error adding wine.");
			}
		});
});

