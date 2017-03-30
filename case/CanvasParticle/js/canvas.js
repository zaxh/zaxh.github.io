/**
 * Created by Administrator on 2017/3/27.
 */
/*********   js面向对象技术练习    **************/
var can;
var cxt;
var dots = {
    num: 500,
    arrDots: [],
    distX: 50,
    distY: 50
};
var mousePosition;
function init(){
    can = document.getElementById("canvas");
    cxt = can.getContext("2d");
    can.width = document.body.clientWidth;
    can.height = document.body.clientHeight;

    mousePosition = {
        eX: 30*can.width/100,
        eY: 30*can.height/100
    };

    for(var i=0;i<dots.num;i++){
        dots.arrDots.push(new drawDot()); //构造函数
        dots.arrDots[i].init();
    }

    animate();
    can.addEventListener("mousemove",mousemove,false);
    can.addEventListener("mouseout",mouseout,false);
}
window.onload = init;
window.requestAnimFrame = ( function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function( callback ) {
            window.setTimeout( callback, 1000 / 60 );
        };
})();
//循环调用
function animate(){
    window.requestAnimFrame(animate);
    cxt.clearRect(0,0,can.width,can.height);
    fillBG();
    Dots();
    drawLine();
}
//填充背景
function fillBG(){
    cxt.fillStyle = "#000";
    cxt.fillRect(0,0,can.width,can.height);
}
//随机颜色
function color(){
    var colors = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
    var color = "";
    for(var i=0;i<6;i++){
        var n = Math.ceil(Math.random()*15);
        color += colors[n];
        if(i==5){
            return "#"+ color;
        }
    }
}
//产生随机数
function rnd( min , max ){
    return Math.random()*(max - min) + min;
}

//创建圆点对象
var drawDot = function(){
    this.x;
    this.y;
    this.r;
    this.speedX;
    this.speedY;
};
//初始化小球
drawDot.prototype.init = function(){
    this.x = Math.ceil(rnd(10 ,can.width));
    this.y = Math.ceil(rnd(10 , can.height));
    this.r =  Math.ceil(rnd(1,5));
    this.speedX = Math.floor(Math.random()*6) - 2.5;
    this.speedY = Math.floor(Math.random()*6) - 2.5;
};
//碰撞到边界，反弹
drawDot.prototype.update = function(){
    this.x += this.speedX*0.1;
    this.y += this.speedY*0.1;
    if(this.x<0 || this.x>can.width ){
        this.speedX = -this.speedX;
    }
    if(this.y<0 || this.y>can.height){
        this.speedY = -this.speedY;
    }
};
//绘制小球
drawDot.prototype.draw = function(){
        cxt.save();
        cxt.fillStyle = color();
        cxt.beginPath();
        cxt.arc(Math.ceil(this.x) , Math.ceil(this.y) , Math.ceil(this.r) , 0 , 2*Math.PI , false);
        cxt.closePath();
        cxt.fill();
        cxt.restore();
};
function Dots(){
    for(var i=0;i<dots.num;i++){
        dots.arrDots[i].update();
        dots.arrDots[i].draw();
    }

}
//连接线
function drawLine(){
    for(var i=0;i<dots.num;i++){
        for(var j=0;j<dots.num;j++){
            if(Math.abs( dots.arrDots[i]["x"] - dots.arrDots[j]["x"] )< dots.distX && Math.abs( dots.arrDots[i]["y"] - dots.arrDots[j]["y"] )< dots.distY){
                if( Math.abs(mousePosition.eX - dots.arrDots[j]["x"])<dots.distX && Math.abs(mousePosition.eY - dots.arrDots[j]["y"])< dots.distY){
                    cxt.save();
                    cxt.strokeStyle = color();
                    cxt.lineWidth = 0.2;
                    cxt.beginPath();
                    cxt.moveTo( dots.arrDots[i]["x"],dots.arrDots[i]["y"] );
                    cxt.lineTo( dots.arrDots[j]["x"],dots.arrDots[j]["y"] );
                    cxt.closePath();
                    cxt.stroke();
                    cxt.restore();
                }
            }
        }
    }
}
//鼠标移入
function mousemove(ev){
    ev = ev || window.event;
    var _x = ev.offsetX || ev.layerX;
    var _y = ev.offsetY || ev.layerY;
    mousePosition.eX = _x;
    mousePosition.eY = _y;
}
//鼠标移出
function mouseout(){
    mousePosition.eX = 30*can.width/100;
    mousePosition.eY = 30*can.height/100;
}



