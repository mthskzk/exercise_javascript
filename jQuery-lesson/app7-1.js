// thisを使った書き換え
// thisはクリックした要素を指すことになる
$(function(){
  $('.box1').on('click', function(){
    $(this).slideUp();
  });
});

// 下記が1つ1つ指定した書き方(めんどくさいやつ)
// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp();
//   });

//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp();
//   });

//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp();
//   });

//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp();
//   });
// });