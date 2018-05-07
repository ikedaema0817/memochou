//最初の処理

let memoChild = document.createElement("li");
memoChild.className ="memo_child";
let list_body = document.getElementById("memo_list");
$("#fix_edit_button").hide();
$("#fix_edit_button2").hide();
$("#select_button").hide();
$("#button").hide();
$("#delete_button").hide();
$("#d_button").hide();

if (localStorage.getItem("memoList") != null) {
  var memoListS = localStorage.getItem("memoList");
  var memoList = [];
  memoList = memoListS.split(",");
  //setStorage();
  var memoNumber = localStorage.getItem("memoNumber");

  //memoNumberの数分左に追加
  for (let i = memoNumber; 1<= i; i--){
    memoChild = document.createElement("li");
    memoChild.textContent = "memo" + i;
    memoChild.className ="memo_child";
    list_body.append(memoChild);
  }
  var e = document.getElementById("editing");
  e.value = memoList[0];
  //ロードしたとき最初の子要素に色つけようと思ったができなかった。DOM操作だからか？
  $("#memoList li:first").addClass("kisekae");
  

} else {
  var memoList = [];
  var memoNumber = 0;
}






// //もしローカルストレージにmemoがあったら・・・使うかは不明
// if(localStorage.getItem("memo") != null) {
//   memo = localStorage.getItem("memo");
// }



//最初にアクセスした時にメモリストを０に定義,メモリストにliを追加※あとで変える
// window.onload = function(){
//   if (typeof localStorage.getItem("memoNumber") == "undefined") {
//     localStorage.setItem("memoNumber", memoNumber);
//     memoChild.textContent = "memo" + memoNumber;
//     list_body.appendChild(memoChild);
//   } else {
//     memoNumber = localStorage.getItem("memoNumber");
//     memo_restoration();
//   }  
// };
// console.log(1);
// //






//メモリスト追加＆右を編集可へ、addボタンを消しfixボタンを表示、fix_editへ続く。。。

function add_list() {
  memoNumber++;
  memoChild = document.createElement("li");
  memoChild.textContent = "memo" + memoNumber;
  memoChild.className = "memo_child";
  memoChild.idName = "memo_child";
  list_body.insertBefore(memoChild, list_body.firstChild);
  $("#add_button").hide();
  let t = document.getElementById("editing");
  t.readOnly = false;
  t.value = "";
  $("#fix_edit_button").show();
  $("#editButton").hide();
  $("#remove_button").hide();
}

//編集ボタン#select_buttonの子要素を全部削除、memoNumberぶんのmemoをforで追加

function edit() {
  $("#button").show();
  let e = document.getElementById("select_button");
  e.textContent = null;
  $("#select_button").show();

  for (let i = memoNumber; i >0; i--) {
    let op = document.getElementById("select_button");
    let optionChild = document.createElement("option");
    let text = document.createTextNode("memo" + i);
    optionChild.appendChild(text);
    optionChild.value = memoNumber - i;
    op.appendChild(optionChild);
  }
}

// //ローカルストレージへ連想配列をセットするメソッド使うかは不明
// function set_ls(key, val) {
//   localStorage.setItem(key, JSON.stringify(val));
// }

// //ローカルストレージから連想配列を読み出すメソッド使うかは不明
// function get_ls(key) {
//   return JSON.parse(localStorage.getItem(key));
// }

//#editingのvalue値を取得＆配列memoListへ保存(memoとセットで)、ローカルストレージへ

function fix_edit() {
  localStorage.setItem("memoNumber",memoNumber);
  let memo_value = document.getElementById("editing").value;
  memoList.unshift(memo_value);
  let memoList2 = memoList.toString();
  localStorage.setItem("memoList",memoList2);

  // storageSetobj("memo"+ memoNumber, memo_value);
  $("#add_button").show();
  $("#fix_edit_button").hide();
  $("#editButton").show();
  $("#remove_button").show();
}




//memoNumberの数分メモを追加できます！//memoNumberの数だけfor文ぐるぐるli追加

// function memo_restoration() {
//   for (let i = 1; i <= memoNumber; i++) {
//     memoChild = document.createElement("li");
//     memoChild.textContent = "memo" + i;
//     list_body.append(memoChild);
//   }}



//ローカルストレージから値を読み取りセットする
function load_storage(){
  for (let i = memoNumber; i >= 1; i--) {
    memoChild = document.createElement("li");
    memoChild.textContent = "memo" + i;
    list_body.append(memoChild);
  }
  let memo_detail = document.getElementById("editing");
  memo_detail.value = memoList[0];
}

// //ローカルストレージに配列を入れる＆読み込むときの関数
// const storageSetobj = function(key,value) {
//   return localStorage.setItem(key, JSON.stringify);
// };

// const storageGetobj = function(key) {
//   return JSON.parse(localStorage.getItem(key));
// };


//ulの子要素liをクリックからのtextareaのValue取得イベント


$(document).on("click", "#memo_list > li", function(){
  let pos = $(this).prevAll("li").length;
  var e = document.getElementById("editing");
  e.value = memoList[pos];
  console.log(pos);
});

//selectボタンの値を取得、編集へいけたらいいな（＋ボタン編集ボタン、セレクトボタン、＃buttonタグ消す）
//aiuの値を次へ渡す
function bt(){
  let aiu = document.aiueo.aiueoa.value;
  let t = document.getElementById("editing");
  t.readOnly = false;
  $("#add_button").hide();
  $("#editButton").hide();
  $("select_button").hide();
  $("#button").hide();
  $("#select_button > option").hide();
  //↑こいつが消えない問題(時間ないから放置)
  $("#fix_edit_button2").show();
  console.log(aiu);
  //ローカルストレージへaiuをほぞん
  localStorage.setItem("aiu",aiu);
}

//編集用のfixボタン
function fix_edit2() {
  let memo_value = document.getElementById("editing").value;
  let val = localStorage.getItem("aiu");
  memoList.splice(val, 1, memo_value);
  let memoList2 = memoList.toString();
  localStorage.setItem("memoList",memoList2);
  $("#add_button").show();
  $("#editButton").show();
  $("#fix_edit_button2").hide();
}

//削除ボタン
function remove() {
  $(".remove_button").hide();
  $("#add_button").hide();
  $("#editButton").hide();
  $("#delete_button").show();
  $("#d_button").show();
  let d = document.getElementById("delete_button");
  d.textContent = null;


  for (let i = memoNumber; i >0; i--) {
    let db = document.getElementById("delete_button");
    let deleteChild = document.createElement("option");
    let text = document.createTextNode("memo" + i);
    deleteChild.appendChild(text);
    deleteChild.value = memoNumber - i;
    db.appendChild(deleteChild);
  }
  //ここまでセレクトボタンからの引用 
}

//選んでDELETEそして再出力
$("#d_button").on("click", function(){
  $("#d_button").hide();
  $("#remove_button").show();
  $("#add_button").show();
  $("#editButton").show();





  let aiu = document.aiueo.delete.value;
  memoList.splice(aiu, 1);
  memoNumber--;
  let m  = document.getElementById("memo_list");
  m.textContent = null;

  //上の方から拝借 決して再定義 メモリストを
  for (let i = memoNumber; 1<= i; i--){
    memoChild = document.createElement("li");
    memoChild.textContent = "memo" + i;
    memoChild.className ="memo_child";
    list_body.append(memoChild);
  }
  var e = document.getElementById("editing");
  e.value = memoList[0];
});




