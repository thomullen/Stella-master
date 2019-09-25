$(document).ready(function () {
    $('nav a[href*="#"]').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 60
        }, 1000);
    });
    $("#up").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
});

$(document).on('scroll', function () {
    if ($(this).scrollTop() > 1) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    };
});