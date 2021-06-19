$(function () {
    // 全选
    $('.checkall').change(function () {
        $('.chooseit').prop('checked', $(this).prop('checked'))
        getSum()
    })

    // 店铺全选

    $('.chooseit').change(function () {
        getSum()
    })

    //    单个商品数量和小计
    $('.decrese').click(function () {
        var n = $(this).siblings('.commodity-num').val()
        if (n == 1) {
            return false
        }
        n--
        $(this).siblings('.commodity-num').val(n)
        var p = $(this).parent().siblings('.price').children('b').html()
        p = p.substr(1)
        p = (p * n).toFixed(2)
        $(this).parent().siblings('.prise-all').children('b').html('￥' + p)
        getSum()
    })
    $('.increse').click(function () {
        var n = $(this).siblings('.commodity-num').val()
        n++
        $(this).siblings('.commodity-num').val(n)
        var p = $(this).parent().siblings('.price').children('b').html()
        p = p.substr(1)
        p = (p * n).toFixed(2)
        $(this).parent().siblings('.prise-all').children('b').html('￥' + p)
        getSum()
    })

    // 不用按钮的商品小计
    $('.commodity-num').change(function () {
        var n = $(this).val()
        var p = $(this).parent().siblings('.price').children('b').html()
        p = p.substr(1)
        p = (p * n).toFixed(2)
        $(this).parent().siblings('.prise-all').children('b').html('￥' + p)
        getSum()
    })

    // 商品总计和总价
    function getSum() {
        var count = 0
        var mon = 0
        $('.chooseit').each(function (i, ele) {
            if ($(this).prop('checked')) {
                var m = $(this).parents('.actions').siblings('.number').children('.commodity-num').val()
                count += parseInt(m)
            }
        })
        $('.num-choose').children('em').text(count)
        $('.chooseit').each(function (i, ele) {
            if ($(this).prop('checked')) {
                var m = $(this).parents('.actions').siblings('.prise-all').children('b').html()
                m = m.substr(1)
                m = parseFloat(m)
                mon += m
            }
        })
        $('.price-choose').children('em').html('￥' + mon.toFixed(2))
    }

    // 删除商品
    var delCount = 0
    $('.del-commodity').click(function () {
        delCount++
        $(this).parents('.whole-store').remove()
        $(this).parents('.single-commodity').remove()
        getSum()
    })

    if (delCount === 4) {
        $('.nothing').show()
    }

    $('.hot').mouseover(function () {
        $(this).parents('.row-bottom-lists').children('.row-bottom-hot').show()
        $(this).parents('.row-bottom-lists').children('.row-bottom-collect').hide()
        $(this).parents('.row-bottom-lists').children('.row-bottom-scan').hide()
        $(this).parents('.row-bottom-lists').children('.row-bottom-like').hide()
    })
    $('.collect').mouseover(function () {
        $(this).parents('.row-bottom-lists').children('.row-bottom-hot').hide()
        $(this).parents('.row-bottom-lists').children('.row-bottom-collect').show()
        $(this).parents('.row-bottom-lists').children('.row-bottom-scan').hide()
        $(this).parents('.row-bottom-lists').children('.row-bottom-like').hide()
    })
    $('.scan').mouseover(function () {
        $(this).parents('.row-bottom-lists').children('.row-bottom-hot').hide()
        $(this).parents('.row-bottom-lists').children('.row-bottom-collect').hide()
        $(this).parents('.row-bottom-lists').children('.row-bottom-scan').show()
        $(this).parents('.row-bottom-lists').children('.row-bottom-like').hide()
    })
    $('.like').mouseover(function () {
        $(this).parents('.row-bottom-lists').children('.row-bottom-hot').hide()
        $(this).parents('.row-bottom-lists').children('.row-bottom-collect').hide()
        $(this).parents('.row-bottom-lists').children('.row-bottom-scan').hide()
        $(this).parents('.row-bottom-lists').children('.row-bottom-like').show()
    })

    $('.checkall-store').change(function () {
        $(this).parent().siblings('.detailed').children('.chooseit').prop('checked', $(this).prop('checked'))
    })

    $('.detailed,.single-commodity').mouseover(function () {
        $(this).css('background', '#fff')
        $(this).css('box-shadow', 'inset 5px 5px 5px #bbb')
    })

    $('.detailed,.single-commodity').mouseout(function () {
        $(this).css('background', '#dbeff2')
        $(this).css('box-shadow', '0 0 0')
    })

    $('.del-commodity').mouseover(function () {
        $(this).css('cursor', 'pointer')
    })
})