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
            480:{
                items:2
            },
            600:{
                items:3
            },
            775:{
                items:4
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

    // Carousel N2 - Awesome Team

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
                items:2
            },
            992:{
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
            '<img src="img/blog/left.png" alt="left">',
            '<img src="img/blog/right.png" alt="right">'
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

    // mainDish нечетные элементы

    function mainDishPhotoFunction() {

        if($(window).width() < 992 && $(window).width() > 768) {
            $('.mainDish__photo-wrap .menu__item:odd').css('margin-left', '5rem');
        }
    }
    mainDishPhotoFunction();

    // при ресайзе  и загрузке перепроверяем
    $(window).on('load resize',mainDishPhotoFunction); {
        mainDishPhotoFunction();
    };



    // Menu Gamburger

    if($(window).width() < 768) {
        $('.menu__toggle').click(function (e) {
            e.preventDefault();

            $('.header__list').toggleClass('showMenu');
        });

        $('.header__list a').click(function (e) {
            e.preventDefault();

            $('.header__list').toggleClass('showMenu');
        });


    };

// Spoiler - welcome__text

    $('.welcome__arrow-down i').click(function (e) {
        e.preventDefault();

        $('.welcome__text-hide').toggleClass('welcome__text-show').slideToggle(800);
    });

// Usefull__link footer hamburger-menu


    // if($(window).width() < 768) {
    //     $('.usefull__link').click(function (e) {
    //         e.preventDefault();
    //
    //         $('.usefull__link a').toggleClass('usefull__link-show');
    //
    //     });
    //
    // };




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