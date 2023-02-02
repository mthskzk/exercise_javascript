// 関数

let alertString;

alertString = addString("Webcamp");

alert(alertString);


function addString(strA){
  let addStr ="hello" + strA;
  return addStr;
}

let promptStr = prompt('何か好きな文字を入力してください。');//promptが入力ダイアログの表示 (valueは初期値)

alert(promptStr);


// じゃんけんの実装
let user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");

while((user_hand != "グー") && (user_hand != "パー") && (user_hand != "チョキ") && (user_hand != null)){
  alert("グー,チョキ,パーのいずれかを入力してください。");
  user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。終わる場合はキャンセルを押してください。");
}

let js_hand = getJShand();
let judge = winLose(user_hand,js_hand);

if (user_hand != null){
  alert("あなたの選んだ手は" + user_hand + "です。\n JavaScriptの選んだ手は" + js_hand + "です。\n 結果は" + judge + "です。");
}else{
  alert("またチャレンジしてね")
}


// ランダムでじゃんけんの手を作成
function getJShand(){
  let js_hand_num = Math.floor(Math.random()*3); //0~2までのランダムな整数値を生成
  let js_hand;

  if(js_hand_num == 0){
    js_hand = "グー";
  }else if(js_hand_num == 1){
    js_hand = "チョキ";
  }else{
    js_hand = "パー"
  }

  return js_hand;
}

// じゃんけんの勝敗を決める
function winLose(user,js){
  let winLoseStr;
  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    }else if(js == "チョキ"){
      winLoseStr = "勝ち";
    }else{
      winLoseStr = "負け";
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    }else if(js == "チョキ"){
      winLoseStr = "あいこ;"
    }else{
      winLoseStr = "勝ち";
    }
  }else{
    if(js == "グー"){
      winLoseStr = "勝ち";
    }else if(js == "チョキ"){
      winLoseStr = "負け";
    }else{
      winLoseStr = "あいこ";
    }
  }
  return winLoseStr
};