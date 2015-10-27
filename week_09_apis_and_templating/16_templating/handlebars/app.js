$(document).ready(function() {

		$.ajax({
		type: "GET",
		url: "http://daretodiscover.herokuapp.com/users",
		success: function(userData) {
			for (var i = 0; i < userData.length; i++) {
			$("tbody").append(template(userData[i]));
			}
		}
	});
	
var source = $("#users-template").html();
var template = Handlebars.compile(source);

//Call the funciton "template" passing in the first object from above
//console log the reuslt

// console.log(template(users[1]));

//Step 3: Write a loop through users array
//Step 4: Output to the colsole the HTML for each user

// for (var i = 0; i < users.length; i++) {
// console.log(template(users[i]));

//Step 5: Use the jquery .append() function to add the gneerated HTML to the table in teh appropirate place

// for (var i = 0; i < users.length; i++) {
// 	$("tbody").append(template(users[i]));
// 	}


});


