var smoothScrolling = (function($, undefined) {

    var init = function() {
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

    var scrollToElement = function(target){
    $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
    }   

    return {
        init: init,
        scrollToElement: scrollToElement
    }
})(jQuery);