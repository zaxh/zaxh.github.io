/**
 * Created by Administrator on 2017/4/14.
 */
$(document).ready(function(){
    var init = {
        onOff: true,
        surCount: null,//游戏次数
        exCount: null,  //兑换次数
        randomNum: [],
        sameNum:[],
        score: null
    };
    var $random = $(".wrap .cards .cards-item a>img.random");
    var $a = $(".wrap .cards .cards-item a");
    var $score = $("#score");
    /** 开始 翻牌 **/
    $("#play").click(function(){
        if(init.onOff){
            init.surCount = parseInt( $("#surplus").html() );
            if(init.surCount>0){
                $random.each(function(){
                    $(this).attr("src","img/"+ Math.floor(Math.random()*12+1) +".jpg");
                });
                $a.css({
                    "-webkit-transform":"rotateY(180deg)",
                    "-moz-transform":"rotateY(180deg)",
                    "transform":"rotateY(180deg)"
                });
                $(this).html("领取奖励");
                init.onOff = false;
                $("#surplus").html( init.surCount - 1 );
                calculate();
            }else{
                alert("游戏结束，请刷新页面重新开始！");
            }
        }else{
            $score.html( parseInt($score.html())+init.score );
            console.log(init.sameNum);
            //还原到开始状态
            $a.css({
                "-webkit-transform":"rotateY(0deg)",
                "-moz-transform":"rotateY(0deg)",
                "transform":"rotateY(0deg)",
                "box-shadow": "none"
            });
            $(this).html("开始游戏");
            init.onOff = true;

        }

    });
    /** 单个卡牌点击翻牌 **/
    $a.each(function(index){
        $(this).click(function(){
            init.exCount = parseInt( $("#exchange").html() );
            if(!init.onOff){
                if(init.exCount>0){
                    $random.eq(index ).attr("src","img/"+ Math.floor(Math.random()*12+1) +".jpg");
                    $("#exchange").html( init.exCount - 1 );
                    calculate();
                }else{
                    alert("兑换次数已用尽！");
                }
            }

        });
    });
    /**算分数 **/
    function calculate(){
        init.randomNum.length = 0;
        init.sameNum.length = 0;
        $a.css({
            "box-shadow": "none"
        });
        $random.each(function(){
            init.randomNum.push( $(this).attr("src") );// Number($(this).attr("src").match(/[0-9]{1,2}/gi))
        });
        //计算相同的
        for(var i=0;i<init.randomNum.length;i++){
            for(var j=i+1;j<init.randomNum.length;j++){
                if(init.randomNum[i] === init.randomNum[j]){
                    init.sameNum.push(i,j);
                    $a.eq(i).css({
                        "box-shadow": "0 0 10px #fff"
                    });
                    $a.eq(j).css({
                        "box-shadow": "0 0 10px #fff"
                    });
                }
            }
        }
        switch(init.sameNum.length){
            case 2:
                init.score = 1000;
                break;
            case 3:
                init.score = 3000;
                break;
            case 4:
                init.score = 5000;
                break;
            case 5:
                init.score = 10000;
                break;
        }
    }

});
