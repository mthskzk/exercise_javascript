// slideDown,slideUpの第一引数はアニメーション速度の指定。単位がミリ秒(1秒=1000)
$(function(){
  $(".box1").slideDown(1000,function(){
    $(".box1").css({
      "background-color": "#0000FF",
      "width": "200px",
      "height": "100px"
    }).slideUp(1000);
  });
});