$(document).ready(function () {
   $('a.LoginModal').click(function (e) {
       e.preventDefault();
        var destinationPopup = $(this).attr('href');
        $(destinationPopup).addClass('window');

        $('.popup__close, .popup__overlay').click(function () {
           $(destinationPopup).removeClass('window');
        });

   });
});