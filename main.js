$(document).ready(function () {

    $("#menu").click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }

    });

    $('a[href*="#"]').on(function (e) {
        e.prevenDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        },
            1000,
            'linear'
        );
    });

});