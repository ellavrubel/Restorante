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
            0: {
                items: 1
            },
            778:{
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
            768:{
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
    }



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
     }

    //    Form-control изменение на form-control-sm

     if($(window).width() < 768){

         $('.welcome-form__wrapper input').removeClass('form-control').addClass
         ('form-control-sm');
     }

    // Spoiler - welcome__text

    $('.welcome__arrow-down i').click(function (e) {
        e.preventDefault();

        $('.welcome__text-hide').toggleClass('welcome__text-show').slideToggle(800);
    });

    // Usefull__link footer hamburger-menu


    if($(window).width() < 768) {
        $('.footer__toggle').click(function (e) {
            e.preventDefault();

            $('.footer__link').toggleClass('usefull__link-itemShow');
            $('.usefull__link').toggleClass('usefull__linkShow');
            $('.footer__link-item').toggleClass('footer__link-itemShow');

        });

    }

    //    Spoiler - Event

        $('.event__arrow-down').click(function (e) {
            e.preventDefault();

            $('.event__sponsors-logo').addClass('.event__show').slideToggle(500);
            $('img.logo-item').addClass(('logo-item__show'));

        });

        $('.event__arrow-down2').click(function (e) {
            e.preventDefault();

            $('.event__time-text').toggleClass('event__time-text__show').slideToggle(800);

    });

    //    Blog обертывание ссылкой заголовка

    if ($(window).width() < 435) {
        $('p.blog__title').wrap('<a class="blog__link" href="/"></a>').append('<span class="blog__dots">...</span>');
    }

    // Плавный scroll наверх

    var buttonUp = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300){
            buttonUp.addClass('show');
        } else{
            buttonUp.removeClass('show');
        }
    });

    $('#button').click(function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, 5000);
    });


    // Плавная прокрутка

    $('a.header__list-item').click(function () {

        var elementClick = $(this).attr('href');
        var destination = $(elementClick).offset().top;

        jQuery('html:not(:animated),body:not(:animated)').animate({
            scrollTop: destination}, 3200);

        return false;

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

    new WOW().init();

});