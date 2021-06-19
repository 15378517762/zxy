$(function () {
    $(window).scroll(function () {
        var n= $('.commodity-mid').offset().top
        if ($(document).scrollTop() >= n) {
            $('.commodity-mid').children('a').fadeIn('2000')
        } else {
            $('.commodity-mid').children('a').fadeOut('2000')
        }
    })

    $('.back-to-top').click(function () {
        $(document).scrollTop(0)
    })

    $('.well-choose').click(function(){
        var n= $('.goods').offset().top
        $(document).scrollTop(n)
    })

    $('.personal-reco').click(function(){
        var n = $('.recommend').offset().top
        $(document).scrollTop(n)
    })

})