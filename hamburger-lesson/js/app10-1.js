$(function() {
  $('.menu-trigger').on('click', function(event) {
    $(this).toggleClass('active'); //toggleClass:指定されているclassをトグル処理するメソッド。トグル処理では該当のclass属性(今回はactive)があるときは削除され、ないときはclassが追加される
    $('#sp-menu').fadeToggle(); //.fadeToggle:要素のフェードイン・フェードアウトを切り替える
    event.preventDefault(); //これはapp9と同じ。今回もaタグだが画面遷移は使用しないので無効化している
  });
});