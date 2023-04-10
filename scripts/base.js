var scrollTop = $(".scroll-to-top");
var $recruitmentForm = $('.form-recruitment');
$(window).scroll(function () {
    var topPos = $(this).scrollTop();

    if (topPos > 100) {
        $(scrollTop).addClass('is-scroll');
    } else {
        $(scrollTop).removeClass('is-scroll')
    }

});

//Click event to scroll to top
$(scrollTop).click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;

});

$('.header-mobile-menu i').click(function () {
    $('.header-mobile-menu__content').addClass('is-open');
    $('.header-mobile-menu .overlay').addClass('is-open');
})

$(document).on('click', '.header-mobile-menu__btn-close, .header-mobile-menu .overlay', function () {
    $('.header-mobile-menu__content').removeClass('is-open');
    $('.header-mobile-menu .overlay').removeClass('is-open');
})

$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 15,
        nav: true,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            1024:{
                items:4
            }
        }
    });
});

$('.portfolio-menu ul li').click(function () {
    $('.portfolio-menu ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });
    return false;
});

$recruitmentForm.submit(function(e) {
    e.preventDefault();
    var objectData = Object.fromEntries(new FormData($recruitmentForm[0]));
    console.log(objectData);
    showSnackBar($('.snackbar--success'), "Gửi thành công!");
    $('#editProductModal').modal('hide');
})

function showSnackBar($snackBarEle, message) {
    $snackBarEle.addClass('show');
    $snackBarEle.text(message);
    setTimeout(function () {
        $snackBarEle.removeClass('show');
    }, 3000);
}