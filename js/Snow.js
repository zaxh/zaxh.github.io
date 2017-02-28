/**
 * Created by Administrator on 2016/10/10.
 */
window.onload = function(){
    var winW = window.innerWidth;
    var winH = window.innerHeight;

    var can = document.getElementById("canvas");
    can.width = winW;
    can.height = winH;
    can.style.cssText = "position:fixed; top:0; left:0; z-index:-1;";
    var cxt = can.getContext("2d");

    //设置雪花数量 位置
    var num = 1000;
    var par = []; //装雪花

    if( winW<640 ){
        num = 150;
    }

    for(var i=0; i<num; i++){
        par.push({
            x : Math.random()*winW,
            y : Math.random()*winH,
            r : Math.random()*2+1,
            re : Math.floor(Math.random()*255),
            g : Math.floor(Math.random()*255),
            b :  Math.floor(Math.random()*255),
            a : Math.random()
        });
    }



    //绘制雪花
    function draw(){
        cxt.save();
        cxt.beginPath();
        cxt.clearRect( 0 , 0 , winW , winH );
        cxt.fillStyle = "white";

        for(var i=0; i<num; i++){
            var p = par[i];
            cxt.strokeStyle = "rgba("+ p.re +","+ p.g +","+ p.b +","+ p.a +")";
            cxt.moveTo(p.x, p.y);
            cxt.arc(p.x , p.y , p.r , 0 , 2*Math.PI , false);
        }
        cxt.fill();
        cxt.stroke();
        cxt.closePath();
        cxt.restore();
        Yplay();
    }
    draw();
    //雪花掉落效果
    function Yplay(){
        for(var i=0; i<num; i++){
            var p =par[i];
            p.y += Math.random()*2;
            if(p.y>=winH){
                p.y = 0;
            }
            if( i>80){
                p.x += Math.random()*0.5;
                if( p.x>winW ){
                    p.x = 0;
                }
            }else if( i>60 ){
                p.x += Math.random()*0.5-0.5;
                if( p.x<0 ){
                    p.x = winW;
                }
            }
        }
    }
    setInterval(draw , 50);
}
