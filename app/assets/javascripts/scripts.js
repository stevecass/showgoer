fullscreen();
$(window).resize(fullscreen);
$(window).scroll(headerParallax);

function fullscreen() {
	var masthead = $('.masthead');
	var windowH = $(window).height();
	var windowW = $(window).width();

	masthead.width(windowW);
	masthead.height(windowH);
}

function headerParallax() {
	var st = $(window).scrollTop();
	var headerScroll = $('#video-header');

	if (st < 500) {
		headerScroll.css('opacity', 0.9-st/1000);
		$('.masthead-arrow ').css('opacity', 0.4-st/250);
		headerScroll.css({
			'-webkit-transform' : 'translateY(' + st/7 + '%)',
			'-ms-transform' : 'translateY(' + st/7 + '%)',
			transform : 'translateY(' + st/7 + '%)'
		});
	}
}
