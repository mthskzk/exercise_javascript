// childrenの使用
// childrenはHTML要素直下のすべての子要素を取得するときに使う
// 今回の場合は<ul>の直下の子要素である<li>がすべて取得されcolorが赤になる

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  });
});