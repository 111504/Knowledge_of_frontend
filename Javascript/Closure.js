//Closure 閉包
//Scope 變數的作用域 區域變數 全域變數 在函式裡的變數 無法被外面存取 
//延伸知識 var 的奇怪特性 先使用再宣告?  疑似全域變數
//Scope 變數的作用範圍 區域變數 全域變數


function outer(){
    //這層找不到變數a 向外找尋
    var b=a*2;

    function inner(c){
        //c有定義 但a,b沒有 向上尋找
        console.log(a,b,c);
    }
    inner(b*3);
}
//global 這層只有a
var a=1
outer(a);
console.log("--------");
//內層 inner 可以讀取外層的宣告 一層層往外找 直到global 這種行為 稱為scope chain
//題目-1
function outer2() {
    // 把 var 拿掉
    b2 = a2 * 2;
  
    function inner(c2) {
      console.log(a2, b2, c2);
    }
  
    inner(b2 * 3);
  }
  
  var a2 = 1;
  outer(a2);
  //b2 在outer函式 並未出現 所以會往global尋找 最後b2會變成全域變數
  console.log("---2---");

  //Scope 測驗
  var msg = "global."

function outer() {
  var msg = "local."

  function inner() {
    return msg;
  }

  return inner;
}

var innerFunc = outer();
var result = innerFunc();

console.log( result );    //  ?

console.log("---3---");