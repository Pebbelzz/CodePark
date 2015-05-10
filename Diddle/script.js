	//makes #notready fade out when mouse goes over it
	$(document).ready(function(){
    $("#notready").mouseenter(function() {
        $("#notready").fadeOut(0);
    });
    });
	
	//makes #clickme fadeout upon loading of screen
	$(document).ready(function() {
    $("#clickme").fadeOut(2000);
});

$(document).ready(function() {
	$("#fadeclick").click(function(){
		$("#fadeclick").fadeOut(3000);
	});
});

$(document).ready(function(){
	$('button').click(function(){
		$('.center').fadeIn(1000);
	});
});