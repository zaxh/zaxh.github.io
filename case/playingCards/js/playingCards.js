/**
 * Created by Administrator on 2017/4/14.
 */
$(document).ready(function(){
    var onOff = true;
    var $random = $(".wrap .cards .cards-item a>img.random");
    /** 开始 翻牌 **/
    $("#play").click(function(){
        if(onOff){
            $random.each(function(){
                $(this).attr("src","images/"+ Math.floor(Math.random()*53+1) +".jpg");
                $(this).removeClass("random").siblings().addClass("random");
            });
            $(".wrap .cards .cards-item a").css({
                "-webkit-transform":"rotateY(180deg)",
                "-moz-transform":"rotateY(180deg)",
                "transform":"rotateY(180deg)"
            });
            $(this).html("领取奖励");
        }else{

        }
        onOff = false;
    });
    /** 单个卡牌点击翻牌 **/
    $(".wrap .cards .cards-item a").click(function(){console.log( $(this).index() );
        $random.eq( $(this).index() ).attr("src","images/"+ Math.floor(Math.random()*53+1) +".jpg");
        $random.eq( $(this).index() ).removeClass("random").siblings().addClass("random");
        $("this").css({
            "-webkit-transform":"rotateY(180deg)",
            "-moz-transform":"rotateY(180deg)",
            "transform":"rotateY(180deg)"
        });
    });
});