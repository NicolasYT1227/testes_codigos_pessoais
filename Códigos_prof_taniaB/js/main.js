$('.btn-nav2').click(function(e) {
    e.preventDefault();

    var targetClick = $(this).attr('href');

    var navHeight = $('.navigation').outerHeight();

    $('html, body').animate({
        scrollTop: $(targetClick).offset().top - navHeight // Subtrai a altura do nav da posição da seção
    }, 1000);
})