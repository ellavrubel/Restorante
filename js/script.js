$(document).ready(function () {



    // Carousel N1

    $('.owl-carousel.slider1').owlCarousel({
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
    });

    //   Spoiler

        $('.services__block-title').click(function (event) {

            if($('.services__block').hasClass('one')){
                $('.services__block-title').not($(this)).removeClass('active');
                $('.services__block-text').not($(this).next()).slideUp(500);
            }
                $(this).toggleClass('active').next().slideToggle(500);


        });

    //  Menu changing

    $('ul.tabs__caption').
    on('click', 'li:not(.active)', function(e) {
        e.preventDefault();

        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('section.mainDish').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    // Carousel N2

    $('.owl-carousel.slider2').owlCarousel({
        loop:true,
        margin:20,
        dots: false,
        nav:true,
        navText:[
            '<img src="img/FT_left-arrow.png" alt="Prev">',
            '<img src="img/FT_right-arrow.png" alt="Next">'
        ],
        slideBy: 3,
        smartSpeed: 1200,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
        }
    });

    // Carousel N3

    $('.owl-carousel.slider3').owlCarousel({
        loop: true,
        smartSpeed: 3000,
        margin: 10,
        dots: false,
        nav:true,
        navText:[
            '<img src="img/FT_left-arrow.png" alt="Prev">',
            '<img src="img/FT_right-arrow.png" alt="Next">'
        ],
        responsive:{
            0: {
                items: 1
            }
        }
    });

    // Carousel N4

    $('.owl-carousel.slider4').owlCarousel({
        loop:true,
        margin:20,
        dots: false,
        nav:true,
        navText:[
            '<img src="img/blog/left.png" alt="Left">',
            '<img src="img/blog/right/png" alt="Right">'
        ],
        slideBy: 3,
        smartSpeed: 1200,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }

        }
    });



























    // Modal Windows

    $('a.LoginModal, a.header__list-item, a.header__list-item_btn').click(function (e) {
        e.preventDefault();
        var destinationPopup = $(this).attr('href');
        $(destinationPopup).addClass('window');

        $('.popup__close').click(function () {
            $(destinationPopup).removeClass('window');
        });
    });











});