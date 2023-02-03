// jQueryの書き方。
// jQueryを使うにはHTMLと紐づけする。このときHTMLの読み込みが終わってからjQueryが実行されるように記述する必要あり
// $(document).ready(function(){
//   jQueryプログラムの内容
// });

// 省略形もある
// $(function(){
//   jQueryプログラムの内容
// });

$(document).ready(function(){
  $("body").html("<h1>Hello jQuery!!</h1>");
});

// jQueryの基本書式(jQueryプログラムの内容)
//  $( セレクタ ).メソッド ( パラメータ );

// セレクタは操作の対象になる部分
// メソッドは何を行うのか
// パラメータを指定するとその内容に書き換えられる