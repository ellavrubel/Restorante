$(document).ready(function () {
   $('a.LoginModal, a.header__list-item, a.header__list-item_btn').click(function (e) {
       e.preventDefault();
        var destinationPopup = $(this).attr('href');
        $(destinationPopup).addClass('window');

        $('.popup__close').click(function () {
           $(destinationPopup).removeClass('window');
        });

   });
});