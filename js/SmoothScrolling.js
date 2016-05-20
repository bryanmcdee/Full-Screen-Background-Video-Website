var smoothScrolling = (function() {

    function init() {
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
    }

    function scrollToElement(target){
    $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
    }   

    return {
        init: init,
        scrollToElement: scrollToElement
    }
}());