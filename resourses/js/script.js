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
    // $('html,body').css('scroll-behavior', 'smooth');

    //scroll animations
    $('.js--section-features').waypoint(function(direction) {
        $('.js--wp-1').addClass('animate__animated animate__fadeIn');

    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animate__animated animate__fadeInUp');

    }, {
        offset: '50%'
    });
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animate__animated animate__fadeIn');

    }, {
        offset: '50%'
    });
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animate__animated animate__pulse');

    }, {
        offset: '50%'
    });


    // Navigation buttons

    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i')
        nav.slideToggle(100);
        if (icon.hasClass('ion-navicon-round')) {
            icon.removeClass('ion-navicon-round');
            icon.addClass('ion-close-round');
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
        }


    })


});