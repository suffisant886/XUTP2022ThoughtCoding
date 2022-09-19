$(function(){
    console.log("载入成功")
    //鼠标移入nav后介绍各组
    var $group = $('.group')
    var $detailDivs = $('.detail div')
    $group.delegate('div','mouseenter',function(){
        var index = $(this).attr('name')
        index = parseInt(index)
        $.each($detailDivs,function(key,data){
            $(data).removeClass('divlife')
            $(data).addClass('divkill')
        })
        $detailDivs.eq(index).addClass('divlife')
    })
    //移出介绍框，恢复初始界面
    var $detail = $('.detail')
    $detail.on('mouseleave',function(){
        $.each($detailDivs,function(key,data){
            $(data).removeClass('divlife')
            $(data).addClass('divkill')
        })
        $detailDivs.eq(0).addClass('divlife')
    })

    //点击login跳出弹窗
    var $btnlog = $('#btnlog')
    $btnlog.on('click',function(){
        $login.removeClass('divkill')
        $login.addClass('divlife')
    })
    //点击X退出登录界面
    var $login = $('#login')
    $login.children('div:first').on('click',function(){
        $login.removeClass('divlife')
        $login.addClass('divkill')
    })
    //点击我要报名跳转注册界面 (内联样式)
    var $jionInA = $('#jionIn')
    $jionInA.on('click',function(){
        var $right = $('.right')
        $right.eq(0).css({display:'none'})
        $right.eq(1).css({display:'flex'})
    })
    //点击登录跳转登录 (内联样式)
    var $loginInA = $('#loginIn')
    $loginInA.on('click',function(){
        var $right = $('.right')
        $right.eq(0).css({display:'flex'})
        $right.eq(1).css({display:'none'})
    })
})