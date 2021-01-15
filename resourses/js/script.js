$(document).ready(function() {

    // sticky nav
    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')

        }
    });

    //scroll on buttons
    $('.js--scroll-to-plan').click(function() {
        $('html,body').animate({ scrollTop: $('.js--section-plan').offset().top }, 500);
    });
    $('.js--scroll-to-next').click(function() {
        $('html').animate({ scrollTop: $('.js--section-features').offset().top }, 500);
    });
    $('html,body').css('scroll-behavior', 'smooth');


});