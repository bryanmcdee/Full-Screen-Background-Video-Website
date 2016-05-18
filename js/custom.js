var vid = document.getElementById("bgvid");
var pauseButton = document.getElementById("vidpause");
var muteIcon = document.getElementById("bgvid");

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