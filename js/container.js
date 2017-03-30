/**
 * Created by Administrator on 2017/3/10.
 */
$(function(){
    $(".container").height($(window).height()-$("header").height()-$("footer").height());
    $(".container .tab-wrap .tab").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        $(".container .con ul").eq($(this).index()).removeClass("hidden").siblings().addClass("hidden");
    });
});
