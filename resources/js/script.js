$(document).ready(function() {

	$(".js--features").waypoint(function(direction) {
		if(direction == "down") {
			$("nav").addClass("hero__nav--fixed");
		} else {
			$("nav").removeClass("hero__nav--fixed");
		}

	}, { 
		offset: "65px;" 
	});
	
});