/* Style Changer */

$(document).ready(function(){


	$('#stlChanger').hover(function(){
	    $(this).toggleClass("open");
	});
	
});

$(document).ready(function() {
	var video = document.getElementById('my-video');
	
	video.addEventListener('play', function() {
	  console.log('Video started playing');
	  // Your code for video start event
	});
  
	video.addEventListener('pause', function() {
	  console.log('Video paused');
	  // Your code for video pause event
	});
  
	video.addEventListener('ended', function() {
	  console.log('Video ended');
	  // Your code for video end event
	});
  });
  
