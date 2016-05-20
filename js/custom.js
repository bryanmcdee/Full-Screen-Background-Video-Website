var vid = document.getElementById("bgvid");
var pauseButton = document.getElementById("vidpause");
var muteIcon = document.getElementById("bgvid");

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
          scrollToElement(target);
        return false;
      }
    }
  });
});

var scrollToElement = function(target){
    $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
}

$(document).ready(function(){
    muteIcon.muted = true;
    
    $("#navBarPause").click(function(e){
        e.preventDefault();
        playVideoButtonClick();
    });
    
    $("#vidpause").click(function(e){
        e.preventDefault();
        playVideoButtonClick();
    });
    
    $("#navBarMute").click(function(e){
        e.preventDefault();
        muteSound();
    });
    
    $('#btnLearnMore').click(function(e){
        e.preventDefault();
        scrollToElement($("#about"));        
    });
    
    $('#btnSubmit').click(function(e){
        e.preventDefault();
        scrollToElement($("#top"));
        clearContactForm();
    });    
});

var playVideoButtonClick = function(){
    vid.classList.toggle("stopfade");
    if (vid.paused)
       playVideo();
	else
        pauseVideo();	
}

var playVideo = function(){
    vid.play();
    pauseButton.innerHTML = "Pause";
    $("#navBarPause i").removeClass('fa-play-circle-o').addClass('fa-pause-circle-o');    
}

var pauseVideo = function(){
    vid.pause();
    pauseButton.innerHTML = "Paused";
    $("#navBarPause i").removeClass('fa-pause-circle-o').addClass('fa-play-circle-o');
}

function vidFade() {
    vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
    // only functional if "loop" is removed 
     vid.pause();
	// to capture IE10
	vidFade();
});

var muteSound = function(){
    if ($('#navBarMute i').hasClass('fa-microphone-slash')){
        muteIcon.muted = false;
        $("#navBarMute i").removeClass('fa-microphone-slash').addClass('fa-microphone');
    } else {
        muteIcon.muted = true;
        $("#navBarMute i").removeClass('fa-microphone').addClass('fa-microphone-slash');
    }
}

var clearContactForm = function(){
    $("#name").val("");
    $("#emailAddress").val("");
    $("#message").val("");
}