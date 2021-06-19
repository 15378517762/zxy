$(function () {
    $(window).scroll(function () {
        var n = $('.commodity-mid').offset().top
        if ($(document).scrollTop() >= n) {
            $('.commodity-mid').children('a').fadeIn('2000')
        } else {
            $('.commodity-mid').children('a').fadeOut('2000')
        }
    })

    $('.back-to-top').click(function () {
        $(document).scrollTop(0)
    })

    $('.well-choose').click(function () {
        var n = $('.goods').offset().top
        $(document).scrollTop(n)
    })

    $('.personal-reco').click(function () {
        var n = $('.recommend').offset().top
        $(document).scrollTop(n)
    })

    $('.commodity-bottom-wrapper').mouseover(function () {
        $(this).css("background", "#fff")
        $(this).css('box-shadow', '5px 5px 5px #555')
    })
    $('.commodity-bottom-wrapper').mouseout(function () {
        $(this).css("background", "#dbeff2")
        $(this).css('box-shadow', '0 0 0')
    })

    $('.else img').mouseover(function () {
        $(this).css('background', '#fff')
        $(this).css('box-shadow', '3px 3px 3px black')
    })

    $('.else img').mouseout(function () {
        $(this).css('background', '#dbeff2')
        $(this).css('box-shadow', '0 0 0')
    })

    $('.headpic').mouseover(function () {

    })

})