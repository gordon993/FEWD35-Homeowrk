$(document).ready(function() {


$(document).on("submit", "form", function(event) {
	event.preventDefault();

	var formInfo = {
        name1: $("#name1").val(),
        name2: $("#name2").val(),
        email: $("#email").val(),
        address: $("#address").val(),
        city: $("#city").val(),
        state: $("#state").val(),
        country: $("#country").val(),
    };


for (field in formInfo) {
    if (formInfo[field] === "") {
        alert("Please fill in all fields.");
        return false;
    }
}
// time to submit

alert("Form submitted!");

});





































});
	