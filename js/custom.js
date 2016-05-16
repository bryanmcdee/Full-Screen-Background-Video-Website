var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("vidpause");

function vidFade() {
    vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
    // only functional if "loop" is removed 
     vid.pause();
	// to capture IE10
	vidFade();
});
pauseButton.addEventListener("click", function() {
    playVideoButtonClick();  
})

$(document).ready(function(){
    $("#navBarPause").click(function(e){
        e.preventDefault();
        playVideoButtonClick();
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