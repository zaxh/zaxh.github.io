/**
 * Created by Administrator on 2017/3/31.
 */
//创建方块对象
function Img(src,x,y,w,h){
    this.src = src;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}
Img.prototype.draw = function(){
    var img = new Image();
    img.src = this.src;
    cxt.save();
    cxt.beginPath();
    cxt.drawImage(img,this.x,this.y,this.w,this.h);
    cxt.closePath();
    cxt.restore();
};
//创建小蛇对象
function Snake(){
    var snakeArray = [];
    for(var i=0;i<4;i++){
        var rect = new Img("img/body.png",200+i*33,200,33,33);
        snakeArray.splice(0,0,rect);
    }
    var head = snakeArray[0];
    head.src = "img/right.png";

    this.head = head;
    this.snakeArray = snakeArray;
    this.dir = 39;   //right
}
Snake.prototype.draw = function(){
   for(var i=0;i<this.snakeArray.length;i++){
       this.snakeArray[i].draw();
   }
};
Snake.prototype.move = function(){
    //创建一个新的灰色的方块，与头部位置重叠，
    //将这个方块放在头后面
    var rect = new Img("img/body.png",this.head.x,this.head.y,this.head.w,this.head.h);
    this.snakeArray.splice(1,0,rect);

    //判断是否吃到食物
    if(isEat()){

    }else{
        this.snakeArray.pop();
    }
    //判断方向
    switch(this.dir){
        case 37: //left
            this.head.x -= this.head.w;
            this.head.src = "img/left.png";
            break;
        case 38: //up
            this.head.y -= this.head.h;
            this.head.src = "img/up.png";
            break;
        case 39: //right
            this.head.x += this.head.w;
            this.head.src = "img/right.png";
            break;
        case 40: //down
            this.head.y += this.head.h;
            this.head.src = "img/down.png";
            break;
        default:
            this.head.x += this.head.w;
            this.head.src = "img/right.png";
            break;
    }
};
var snake = new Snake();
function createSnake(){
    snake.draw();
}
function moveSnake(){
    snake.move();
}

