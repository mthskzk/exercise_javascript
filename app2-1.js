// letによる変数定義
let hello = "Hello Wolrd";
alert(hello);

// 四則演算
alert(4+3);
alert(8-5);
alert(2*6);
alert(10/2);

alert("hello" + "world");

let str1="Hello";
let str2="World";

alert(str1+str2);

// 条件式
let orange=100;
let apple=120;

if(orange < apple){
  alert("みかんの値段がリンゴより安い");
}else if(orange == apple){
  alert("みかんとリンゴの値段は同じ")
}else{
  alert("みかんの値段がリンゴより高い")
}

// while文：条件式が真なら制限なく繰り返す。
let max=100;
let num=1;
let count=0;

while(num<max){
  num=num*2;
  count = count+1;
}

alert("2を掛け続けて" + max + "を超えるのに必要だった回数は" + count + "回です");

// do..while文：while文は条件がfalseなら1回目もやらない。do..while文は条件がfalseでも1回目はやる。
let num1=10;
let num2=20;

do{
  num2 = num2 + 5;
}while(num2<num1);

alert(num2);

// for文：決められた回数分処理を繰り返す
// for文内で使うiは必ず前で定義しておく
let i;
let num3 = 0;

for (i=1; i<11; i++){
  num3 = num3 + i;
}

alert("1～10まで足し算した結果は" + num3 + "です");