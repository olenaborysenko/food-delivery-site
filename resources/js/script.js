$(document).ready(function() {

	//fixed nav
	$(".js--features").waypoint(function(direction) {
		if(direction == "down") {
			$("nav").addClass("hero__nav--fixed");
		} else {
			$("nav").removeClass("hero__nav--fixed");
		}

	}, { 
		offset: "65px;" 
	});

	//scroll on buttons
	$(".js--scroll-to-plans").click(function(){
		$("html, body").animate({scrollTop: $(".js--plans").offset().top}, 1000);
	})
	$(".js--scroll-to-start").click(function(){
		$("html, body").animate({scrollTop: $(".js--features").offset().top}, 1000);
	})

	//nav scroll
	$('a[href*="#"]')
		.not('[href="#"]')
		.not('[href="#0"]')
		.click(function(event) {
			//on-page links
			if (
				location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
				&& 
				location.hostname == this.hostname
			) {
				// Figure out element to scroll to
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				// Does a scroll target exist?
				if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				$('html, body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

	//animations on scroll
	$(".js--wp-1").waypoint(function(direction) {
		$(".js--wp-1").addClass("animated fadeIn");
	}, {
		offset: "50%"
	});

	$(".js--wp-2").waypoint(function(direction) {
		$(".js--wp-2").addClass("animated shake");
	}, {
		offset: "50%"
	});

	$(".js--wp-3").waypoint(function(direction) {
		$(".js--wp-3").addClass("animated fadeIn");
	}, {
		offset: "50%"
	});

	$(".js--wp-4").waypoint(function(direction) {
		$(".js--wp-4").addClass("animated pulse");
	}, {
		offset: "50%"
	});

});