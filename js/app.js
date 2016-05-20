var app = function(){
    
    var vid = document.getElementById("bgvid");
    var pauseButton = document.getElementById("vidpause");
    var muteIcon = document.getElementById("bgvid");

    var bindClickEvents = function(){
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
            smoothScrolling.scrollToElement($("#about"));        
        });
        
        $('#btnSubmit').click(function(e){
            e.preventDefault();
            smoothScrolling.scrollToElement($("#top"));
            clearContactForm();
        });   
    }    

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

    var vidFade = function() {
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
    
    var init = function(){
        smoothScrolling.init();
        muteIcon.muted = true;
        bindClickEvents();
    }
    
    init();
    
    return {        
    }       
}