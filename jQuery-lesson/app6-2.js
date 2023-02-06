// 6-1ではイベントごとにCSSを変更してきた
// 今回はクラスを追加（または削除）でCSSファイルに条件は記載しておく

$(function(){
  $(".box1").mouseover(function(){
    $(".box1").addClass("box1-ext");
  });
  $(".box1").mouseout(function(){
    $(".box1").removeClass("box1-ext");
  });
})