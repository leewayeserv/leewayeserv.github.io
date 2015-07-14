var homeDiv = $('.height-adjusting'),
	winheight=$(window).height();
	function setVars(){
		homeDiv.css("height",winheight);
	}
	$(document).ready(setVars());
	$(window).resize(function(){
		winheight = $(window).height();
		setVars();
	});
