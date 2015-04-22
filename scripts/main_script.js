$(document).ready(function (){
	
	$('#splash').vegas({
	    slides: [
	        { src: 'imgs/bd_alumni.jpg' },
	        { src: 'imgs/bd_berry.jpg' },
	        { src: 'imgs/bd_cooking.jpg' },
	        { src: 'imgs/bd_discuss.jpg' },
	        { src: 'imgs/bd_hamock.jpg' }
	    ],
    	transition: ['swirlLeft', 'swirlRight', 'blur2']
	});
			
	function scrollTo(nextId){
		$('html, body').animate({
	        scrollTop: $(nextId).offset().top
	    }, 1000);
	}
	function scrollToAdjust(nextId){
		//Getting location of the element minus the height offset to center
		var adjust = $(nextId).offset().top - 46;
		$('html, body').animate({
	        scrollTop: adjust
	    }, 1000);
	}
	
	$("#to-projects").click(function() {
	    scrollToAdjust("#projects");
	});
	$("#to-schedules").click(function() {
	    scrollToAdjust("#schedules");
	});
});