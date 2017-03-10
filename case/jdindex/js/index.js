/**
 * Created by Administrator on 2016/12/9.
 */
$(function () {
    /****  搜索框焦点    ****/
    $("#search_form_input").focus(function(){
        $(".jd-search-logo-blur").hide().siblings().show();
        $(".jd-search-form-blur,.jd-search-login").addClass("focus");
        $(".jd-search-form-focus-hot").show();
        $(".jd-search-form").css({"background-color" : "#ccc"});
        $("header").siblings().hide();
    });
    $(".jd-search-logo-focus").click(function(){
        $(".jd-search-logo-blur").show().siblings().hide();
        $(".jd-search-form-blur,.jd-search-login").removeClass("focus");
        $(".jd-search-form-focus-hot").hide();
        $(".jd-search-form").css({"background-color" : "transparent"});
        $("header").siblings().show();
    });

    /******   search 搜索框 start **********/
    window.onscroll = function(){
        var h = document.body.scrollTop;
        var goTop = document.getElementsByClassName("goTop")[0];
        if( h>0 ){
            $(".jd-search-container").css('background-color' , 'rgba(255,0,0,.8)');
        }else if( h==0 ){
            $(".jd-search-container").css('background-color' , 'transparent');
        }
        if( h>500 ){
            $(".goTop").show();
        }else if( h<500 ){
            $(".goTop").hide();
        }
       goTop.onclick = function(){
            document.body.scrollTop = 0;
        };
    };


    /*******  banner 无缝滚动   *********/
    var mySwiper = new Swiper('.jd-banner-container', {
        autoplay: 5000,//可选选项，自动滑动
        loop: true ,
        pagination : '.swiper-pagination',
        paginationClickable :true
    });
    /******   news 竖向无缝滚动   ********/
    var mySwiper1 = new Swiper('.news-list-wrapper' , {
        autoplay: 3000,
        loop: true,
        direction: 'vertical'
    });
    /******  seckill 秒杀 时间 内容滑动动画******************/
    var oEm = $(".time");
    var date = new Date();
    var currentHour = date.getHours();
    var currentMinute = date.getMinutes();
    var currentSecond = date.getSeconds();
    oEm.html( currentHour );


    /******* seckill 秒杀 内容动画 *************/
    var mySwiper2 = new Swiper('.seckill-container' , {
        slidesPerView : 3.5
    });
    /******  slider 滑动动画******************/
    var mySwiper3 = new Swiper('.slider' , {
        autoplay: 5000,
        loop: true,
        pagination : '.swiper-pagination',
        paginationClickable :true
    });


});
