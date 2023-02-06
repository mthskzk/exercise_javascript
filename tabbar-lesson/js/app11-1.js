$('#tab-contents .tab[id != "tab1"]').hide(); //ここではid=tab-contentsの要素のうち、class名がtabでありidがtab1以外のものをhide()している

$('#tab-menu a').on('click', function(event) { //id=tab-menuの要素のうちaタグがクリックされたとき
  $("#tab-contents .tab").hide(); //id=tab-contentsの要素のうちclass名がtabのものをhide
  $("#tab-menu .active").removeClass("active"); //id=tab-menuの要素のうちclass名がactiveからclass名activeを削除
  $(this).addClass("active"); //クリックされた要素にclass名activeを追加
  $($(this).attr("href")).show(); //.attr()は、HTML要素の属性を取得したり設定できるメソッド。今回はhref属性の取得を指定。さらに.show()で取得したhref属性の中身を表示
  event.preventDefault();
});