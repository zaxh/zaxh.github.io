/**
 * Created by Administrator on 2016/10/12.
 */
/******* header *********/
$(function(){

    //点击按钮
    var $navBtn = $("header.cd-header .cd-3d-nav-trigger");
    var onOff = true;

    $navBtn.click(function(){
        if( onOff ){
            $("header.cd-header .cd-3d-nav-trigger span.button").addClass("nav-is-visible");
            $("nav.cd-3d-nav-container").addClass("nav-is-visible");
            $("header.cd-header").addClass("nav-is-visible");
            onOff = false;
        }else{
            $("header.cd-header .cd-3d-nav-trigger span.button").removeClass("nav-is-visible");
            $("nav.cd-3d-nav-container").removeClass("nav-is-visible");
            $("header.cd-header").removeClass("nav-is-visible");
            onOff = true;
        }
    });

    //点击导航
    var $navLi = $("nav.cd-3d-nav-container .cd-3d-div li");

    $navLi.click(function(){
        $(this).addClass("cd-selected").siblings().removeClass("cd-selected");
    });
});

/************ music ************/
$(function(){
    var $Audio = $("#audio");
    var $msc = $("#music");
    var onOff = true;
    $Audio.get(0).addEventListener("play" , function(){
        $msc.addClass("play");
    } , false);
    $msc.click(function(){
        if( onOff ){
            $Audio.get(0).pause();
            //$msc.removeClass("play");
            $msc.css({
                "-webkit-animation-play-state" : "paused",
                "-moz-animation-play-state" : "paused",
                "-o-animation-play-state" : "paused",
                "animation-play-state" : "paused"
            });
            onOff = false;
        }else{
            $Audio.get(0).play();
            //$msc.addClass("play");
            $msc.css({
                "-webkit-animation-play-state" : "running",
                "-moz-animation-play-state" : "running",
                "-o-animation-play-state" : "running",
                "animation-play-state" : "running"
            });
            onOff = true;
        }
    });
});

/******** heart ***********/
$(function(){
    setInterval(function(){
        $("#heart .heart-item").each(function(){
            $(this).css({
                "border-color" : Color()
            });
        });
    } ,500);
    //随机颜色
    function Color(){
        var r = Math.floor( Math.random()*255 );
        var g = Math.floor( Math.random()*255 );
        var b = Math.floor( Math.random()*255 );
        return "rgb( "+ r +" , "+ g +" , "+ b +" )";
    }

});
/************ cube start ************************/
$(function(){
   $("#cube").hover(function(){
       $(this).css({
           "-webkit-animation-play-state" : "paused",
           "-moz-animation-play-state" : "paused",
           "-o-animation-play-state" : "paused",
           "animation-play-state" : "paused"
       });
   },function(){
       $(this).css({
           "-webkit-animation-play-state" : "running",
           "-moz-animation-play-state" : "running",
           "-o-animation-play-state" : "running",
           "animation-play-state" : "running"
       });
   });
});
/***** 手机适配 introduce 文字打印机效果显示 **************************************/
$(function(){
    var $text = $(".introduce").attr("data-text");
    var len = $text.length;
    var arr = [];
    var t = 0;
    var timer = null;
    var w = window.innerWidth;

    if( w>640){
        clearInterval( timer );
    }

    for( var i=0; i<len; i++){
        arr[i] = $text.substr( i , 1 );
    }
    function Write(){
        if( t<len ){
            $(".introduce").append( arr[t] );
            t++;
        }else{
            clearInterval( timer );
        }
    }
    timer = setInterval( Write , 200 );
});
/***************照片显示效果************************************************************/
$(function(){
    $(".list-item").mouseenter(function(){
        var $index = $(this).index();
        $(".bigShow>img").attr("src" , "img/con"+ parseInt( $index+1 ) +"big.png");
    });
});