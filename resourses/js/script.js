$(document).ready(function() {

    // $('nav').addClass('sticky')

    $('.js--section-features').waypoint(function(direction) {
        if (direction == 'down') {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')

        }
    });


});