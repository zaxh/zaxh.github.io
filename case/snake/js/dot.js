/**
 * Created by Administrator on 2017/3/31.
 */
//创建小球对象
function Dot(){
    this.x = Math.ceil(Math.random()*can.width);
    this.y = Math.ceil(Math.random()*can.height);
    this.r = Math.ceil(Math.random()*2+3);
}
//绘制小球
Dot.prototype.draw = function(){
    cxt.save();
    cxt.fillStyle = "#f00";
    cxt.beginPath();
    cxt.arc(this.x , this.y , this.r , 0 , Math.PI*2 , false);
    cxt.closePath();
    cxt.fill();
    cxt.restore();
};
//添加小球
function addDot(){
    for(var i=0;i<dots.num;i++){
        dots.arrDot.push(new Dot());
    }
}
//生成小球
function createDot(){
    for(var i=0;i<dots.num;i++){
        dots.arrDot[i].draw();
    }
}
//更新小球
function updateDot(){
    if(dots.num < 50){
        dots.num += Math.ceil(Math.random()*100);
        for(var i=0;i<dots.num;i++){
            dots.arrDot.push(new Dot());
            dots.arrDot[i].draw();
        }
    }
}