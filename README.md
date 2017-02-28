<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="format-detection" content="telephone=no">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0，minimum-scale=1.0">
    <meta name="keywords" content="zax 博客 前端技术 前端 前端工程师 HTML5">
    <title></title>
    <link rel="stylesheet" href="css/reset.css" />
    <link rel="stylesheet" href="css/bootstrap.css">
    <link rel="stylesheet" href="css/footer.css">
    <link rel="stylesheet" href="css/index.css" />
<body>
    <!--header start-->
    <header class="container cd-header">
        <div class="logo">
            <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="200px" height="100px">
                    您的浏览器不支持svg，请您更新浏览器！
                    <!-- Z -->
                    <g>
                        <g class="list">
                            <path class="list-item" d="M0 15L50 0L0 80L50 80M20 25L45 60Z" style="stroke:#f00; opacity:1;"></path>
                            <path class="list-item" d="M0 15L50 0L0 80L50 80M20 25L45 60Z" style="stroke:#1cbf3d; opacity:1;"></path>
                            <path class="list-item" d="M0 15L50 0L0 80L50 80M20 25L45 60Z" style="stroke:#e3e8ea; stroke-width:5px; opacity:1;"></path>
                        </g>
                    </g>
                    <!-- A -->
                    <g>
                        <g class="list">
                            <path class="list-item" d="M100 25C50 10 50 120 122 60M80 5L130 80Z" style="stroke:#1cbf3d; opacity:1;"></path>
                            <path class="list-item" d="M100 25C50 10 50 120 122 60M80 5L130 80Z" style="stroke:#1d7598; opacity:1;"></path>
                            <path class="list-item" d="M100 25C50 10 50 120 122 60M80 5L130 80Z" style="stroke:#ca2799; stroke-width:5px; opacity:10;"></path>
                        </g>
                    </g>
                    <!-- X -->
                    <g>
                        <g class="list">
                            <path class="list-item" d="M150 10L180 80M200 20L140 90Z" style="stroke:#77d40d; opacity:1;"></path>
                            <path class="list-item" d="M150 10L180 80M200 20L140 90Z" style="stroke:#773c13; opacity:1;"></path>
                            <path class="list-item" d="M150 10L180 80M200 20L140 90Z" style="stroke:#8a7fec; stroke-width:5px; opacity:1;"></path>
                        </g>
                    </g>
                </svg>
            </a>
        </div>
        <div class="cd-3d-nav-trigger">
            <span class="button"></span>
        </div>
    </header>
    <!--nav start-->
    <nav class="container-fluid cd-3d-nav-container">
        <ul class="cd-3d-div">
            <li class="cd-selected"><a href="#"><i class="iconfont">&#xe657;</i><span>home</span></a></li>
            <li><a href="#"><i class="iconfont">&#xe638;</i><span>html</span></a></li>
            <li><a href="#"><i class="iconfont">&#xe619;</i><span>js/jq</span></a></li>
            <li><a href="#"><i class="iconfont">&#xe66b;</i><span>html5</span></a></li>
            <li><a href="others/others.html"><i class="iconfont">&#xe607;</i><span>others</span></a></li>
        </ul>
    </nav>
    <!--main start-->
    <main class="container">
        <!--music start -->
        <div id="music">
            <audio id="audio" src="music/Let It Go .mp3" autoplay loop ></audio>
            <!--<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=440353296&auto=0&height=66"></iframe>-->
            <img src="img/music.png" alt="音乐播放器">
        </div>
        <!--heart start-->
        <div id="heart">
            <div class="heart-item"></div>
            <div class="heart-item"></div>
            <div class="heart-item"></div>
            <div class="heart-item"></div>
            <div class="heart-item"></div>
            <div class="heart-item"></div>
            <div class="heart-item"></div>
            <div class="heart-item"></div>
            <!--cube start-->
            <!--<div id="cube">
                <div class="font"></div>
                <div class="back"></div>
                <div class="top"></div>
                <div class="bottom"></div>
                <div class="left"></div>
                <div class="right"></div>
            </div>-->
        </div>
        <!--mobile effect start-->
        <div class="introduce" data-text="徐莫庭，是顾西爵小说《最美遇见你》的男主角，英俊清冷，文质彬彬，睿智而严谨，外交系老大。他是天之骄子，只有他自己知道，在那年那个一眼，他遇见了今生的唯一——李安宁，他的这一生才真正圆满。">
        </div>
        <!--<div class="con-wrap">
            <div class="fl bigShow">
                <img src="img/con1big.png" alt="">
            </div>
            <div class="fr smallList">
                <ul>
                    <li class="list-item"><a href=""><img src="img/con1small.png" alt=""><span class="mark"></span><span class="text">Description Text</span></a></li>
                    <li class="list-item"><a href=""><img src="img/con2small.png" alt=""><span class="mark"></span><span class="text">Description Text</span></a></li>
                    <li class="list-item"><a href=""><img src="img/con3small.png" alt=""><span class="mark"></span><span class="text">Description Text</span></a></li>
                    <li class="list-item"><a href=""><img src="img/con4small.png" alt=""><span class="mark"></span><span class="text">Description Text</span></a></li>
                    <li class="list-item"><a href=""><img src="img/con5small.png" alt=""><span class="mark mark1"></span><span class="mark mark2"></span><span class="text">Description Text</span></a></li>
                    <li class="list-item"><a href=""><img src="img/con6small.png" alt=""><span class="mark"></span><span class="text">Description Text</span></a></li>
                    <li class="list-item"><a href=""><img src="img/con7small.png" alt=""><span class="mark"></span><span class="text">Description Text</span></a></li>
                    <li class="list-item"><a href=""><img src="img/con8small.png" alt=""><span class="mark"></span><span class="text">Description Text</span></a></li>
                    <li class="list-item"><a href=""><img src="img/con9small.png" alt=""><span class="mark"></span><span class="text">Description Text</span></a></li>
                    <li class="list-item"><a href=""><img src="img/con10small.png" alt=""><span class="mark"></span><span class="text">Description Text</span></a></li>
                    <li class="list-item"><a href=""><img src="img/con11small.png" alt=""><span class="mark mark3"></span><span class="mark mark4"></span><span class="text">Description Text</span></a></li>
                    <li class="list-item"><a href=""><img src="img/con12small.png" alt=""><span class="mark"></span><span class="text">Description Text</span></a></li>
                </ul>
            </div>
        </div>--->
    </main>
    <!--footer start-->
    <footer class="container-fluid">
        <section class="row">
            <p class="copyright">Copyright 2016 by ZAX</p>
        </section>
    </footer>
    <canvas id="canvas">
        您的浏览器不支持canvas，请您更新浏览器！
    </canvas>




    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/Snow.js"></script>
    <script type="text/javascript" src="js/index.js"></script>
    <script src="js/jquery.drawsvg.min.js "></script>
    <script>
        var $svg = $('svg').drawsvg();
        $svg.drawsvg('animate');
    </script>
</body>
</html>
