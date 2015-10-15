$(document).on("click", ".international", function (event) {
	event.preventDefault ();

	$("#international-drop").show().siblings().hide();	

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp ();
		$("#primary-nav li").removeClass("active");
	} else {
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
		$("#slide-down").slideDown();

		$("#primary-nav li").removeClass("active");	
		$(this).addClass("active");

	}
});

$(document).on("click", ".politics", function (event) {
	event.preventDefault();

	$("#politics-drop").show().siblings().hide();	

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp ();
		$("#primary-nav li").removeClass("active");
	} else {
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
		$("#slide-down").slideDown();

		$("#primary-nav li").removeClass("active");	
		$(this).addClass("active");

	}
});

$(document).on("click", ".business", function (event) {
	event.preventDefault();
	
	$("#business-drop").show().siblings().hide();	

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp ();
		$("#primary-nav li").removeClass("active");
	} else {
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
		$("#slide-down").slideDown();

		$("#primary-nav li").removeClass("active");	
		$(this).addClass("active");

	}
});

$(document).on("click", ".technology", function (event) {
	event.preventDefault();
	
	$("#technology-drop").show().siblings().hide();	

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp ();
		$("#primary-nav li").removeClass("active");
	} else {
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
		$("#slide-down").slideDown();

		$("#primary-nav li").removeClass("active");	
		$(this).addClass("active");

	}
});

$(document).on("click", ".culture", function (event) {
	event.preventDefault();

	$("#culture-drop").show().siblings().hide();	

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp ();
		$("#primary-nav li").removeClass("active");
	} else {
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
		$("#slide-down").slideDown();

		$("#primary-nav li").removeClass("active");	
		$(this).addClass("active");
	}
});

$(document).on("click", ".blogs", function (event) {
	event.preventDefault();

	$("#blogs-drop").show().siblings().hide();	

	if ($(this).hasClass("active")) {
		$("#slide-down").slideUp ();
		$("#primary-nav li").removeClass("active");
	} else {
		$("#primary-nav li").removeClass("active");
		$(this).addClass("active");
		$("#slide-down").slideDown();

		$("#primary-nav li").removeClass("active");	
		$(this).addClass("active");
	}
});

