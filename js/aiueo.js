let memoNumber;
let memoChild = document.createElement("li");
memoChild.className ="memo_child";
let list_body = document.getElementById("memo_list");
$("#fix_edit_button").hide();

//最初にアクセスした時にメモリストを０に定義,メモリストにliを追加
window.onload = function(){
  if (typeof localStorage.getItem("memoNumber") == "undefined") {
    memoNumber = 1;
    localStorage.setItem("memoNumber", memoNumber);
    memoChild.textContent = "memo" + memoNumber;
    list_body.appendChild(memoChild);
  } else {
    memoNumber = localStorage.getItem("memoNumber");
    memo_restoration();
  }  
};
console.log(1);
//






//メモリスト追加＆右を編集可へ、addボタンを消しfixボタンを表示、fix_editへ続く。。。

function add_list() {
  memoNumber++;
  var t = document.getElementById("editing");
  localStorage.setItem("memoNumber", memoNumber);
  memoChild = document.createElement("li");
  memoChild.textContent = "memo" + memoNumber;
  memoChild.className ="memo_child";
  list_body.append(memoChild);
  $("#add_button").hide();
  t.readOnly = false;
  $("#fix_edit_button").show();
}

//#editingのvalue値を取得＆保存(memoとセットで)

function fix_edit() {
  var memo_value = document.getElementById("editing").value;
  localStorage.setItem("memo" + memoNumber, memo_value);
  $("#add_button").show();
  $("#fix_edit_button").hide();
}


//memoNumberの数分メモを追加できます！//memoNumberの数だけfor文ぐるぐるli追加

function memo_restoration() {
  for (let i = 1; i <= memoNumber; i++) {
    memoChild = document.createElement("li");
    memoChild.textContent = "memo" + i;
    list_body.append(memoChild);
  }}

