$(document).ready(function() {


$(document).on("submit", "form", function(event) {
	event.preventDefault();

	var formInfo = {
        name1: $("#name1").val(),
        name2: $("#name2").val(),
        email: $("#email").val(),
        city: $("#city").val(),
        state: $("#state").val(),
        country: $("#country").val(),
    };

console.log(formInfo);

for (field in formInfo) {
    if (formInfo[field] === "") {
        alert("Please fill in all fields.");
        return false;
    }
}

alert("Form submitted!");

});





































});
	