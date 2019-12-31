$(document).ready(function () {

   // Modal Windows

   $('a.LoginModal, a.header__list-item, a.header__list-item_btn').click(function (e) {
       e.preventDefault();
        var destinationPopup = $(this).attr('href');
        $(destinationPopup).addClass('window');

        $('.popup__close').click(function () {
           $(destinationPopup).removeClass('window');
        });
   });

    // Carousel

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:20,
        dots: false,
        nav:true,
        navText:[
            '<img src="img/FT_left-arrow.png" alt="Prev">',
            '<img src="img/FT_right-arrow.png" alt="Next">'
        ],
        slideBy: 6,
        smartSpeed: 1200,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:6
            }
        }
    })
});