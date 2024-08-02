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
//Closure 當inner函式被回傳後，也可以取得內部函式"當時環境"的變數值
//延伸  為何不直接回傳變數就好，還要使用個內部函式
//count+Closure
//counter 返回 innerFunction，使得 closureFunction 成為一個閉包，
//記住了 counter 內的變量 counter
//即使 counter 已經執行完畢。

function counter(){
  let counter=0;
  console.log("counter_l",counter);
  function inner_counter(){
      return ++counter;
  }
//請注意 是回傳函式本身
return inner_counter
//而不是函式運算後結果
// return inner_counter()

}

let countFunc=counter();

console.log( countFunc() );   
console.log( countFunc() );   
console.log( countFunc() );
console.log( typeof countFunc() );
console.log( typeof countFunc() );
console.log( typeof countFunc );   
console.log("---4---");

//複雜的閉包例子
function createCounter(){
  let count =0;
  return {
    increment: function(){
      count++;
      return count;
    },
    decrement: function(){
      count--;
      return count;
    },
    getCount: function(){
      return count;
    }
  }
}
let counter_2 = createCounter();

console.log(counter_2.increment()); // 1
console.log(counter_2.increment()); // 2
console.log(counter_2.decrement()); // 1
console.log(counter_2.getCount());  // 1
console.log("---5---");

let counter_ES6 = () => {
  let count_es6 = 0;
  return () => ++count_es6;
}
//注意 與一般函數不同 counter_ES6()回傳的是函數 
console.log( typeof counter_ES6())
let countFunc_ES6 =counter_ES6();
console.log(  counter_ES6()())
console.log(countFunc_ES6())
console.log("---6---");
function test(){
  return 2 ;
}
console.log( test())

// 當函數被創建時 javascript 會創立一個作用域鍊 scope chain，用來儲存該函數能夠訪問的所有變量
// 也就是說閉包透過丟出內部函數  而內部函數再被定義的時候，會有一個scope chain，他會把能夠訪問的變數狀態記錄下來  
console.log("---7---");
function counter(){
  let counter=0;
  console.log("counter_l",counter);
  function inner_counter(){
      return ++counter;
  }
//請注意 是回傳函式本身
return inner_counter
//而不是函式運算後結果
// return inner_counter()

}