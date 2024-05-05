var section = document.querySelectorAll('section');

window.onscroll = () => {
    section.forEach(sec => {
        var top = window.scrollY;
        var offset = sec.offsetTop - 150;
        var height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
            
        }
    })
}

(function ($) {
    $(window).on('load', function() {
        setTimeout(() => {
            $('#js-preloader').addClass('loaded');  
        }, 2500)
    })

})(window.jQuery);