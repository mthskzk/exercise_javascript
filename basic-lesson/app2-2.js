// 変数宣言は3種類
// varとletとconst　ただしvarは今ではほとんど使われない

// 再宣言：一度宣言した変数名で再度、変数宣言を行うこと
// 再宣言はvarしか使えない
var nickname = "taro";
console.log(nickname);
var nickname = "ichiro";
console.log(nickname);

// 再代入：変数に値を代入した後で、別の値を代入すること
// 再代入はvarとletで使える。constでは使えない
var nickname1 = "taro";
console.log(nickname1);
nickname1 = "jiro";
console.log(nickname1);

let nickname2 = "taro";
console.log(nickname2);
nickname2 = "saburo";
console.log(nickname2);

// スコープ：変数にはスコープ（有効範囲）がある。グローバルスコープとローカルスコープの2種類ある
// ローカルスコープには関数スコープとブロックスコープがある

// varのスコープ
var str="webcamp"; //グローバルスコープ：どこからでも参照できる変数

function foo1(){
  console.log(str)
  var y = "hello" //関数スコープ
};

foo1();
// console.log(y); //関数スコープはローカルスコープだからyを関数の外で呼び起こすことは出来ない。

// letのスコープ
function foo2() {
  let x="webcamp";//ブロックスコープ：ブロックとは()や{}の組で区切られたもの
  {
    let y="hello webcamp";//ブロックスコープ
  };
  console.log(x);
  // console.log(y); //ｙは呼び出せない
};

foo2();

for(let i=0; i<4; i++){ //iがブロックスコープ
  console.log(i)
};

// console.log(i);  //｛｝の外でiは呼び出せない

// 巻き上げ（ホイスティング）：関数内のどの部分で変数を宣言しても、関数冒頭で変数を宣言したことになる
// 下記の場合はグローバルスコープでstr1を宣言しても、関数内では関数スコープのstr1を拾いに行ってしまう
// 解決策は多分引数で渡せばOK
var str1 = "webcamp"

function foo3() {
  //var str1  みたいなイメージ(関数冒頭で変数を宣言というのは)
  console.log(str1); //ここでグローバルスコープのstr1を拾いに行くのではなく関数スコープのstr1を拾いに行く。よってまだ値が入っていない状態となる
  var str1="dmm webcamp";
  console.log(str1)
};

foo3();