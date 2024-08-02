//javascript 基本型別以外 都是物件，所以函式也算物件  es6 新增 箭頭函式
//定義函式的幾種方式 
// Function Declaration 函式宣告
function origin(){
    let a=10;
    return a;
}
// Function Expressions 變數名稱 = function (參數){} function沒名子 屬於匿名函式
var square=function(number){
    return number*number;
};

//new Function "物件" 實務上較少這樣做
var square=new Function('number','return number * number');

//Scope 變數的有效範圍  全域變數 區域變數  

var x = 1;

var doSomeThing = function(y) {
  var x = 100;
  return x + y;
};

console.log( doSomeThing(50) );   // ?
console.log( x );  

console.log( "------------------------" );

var x2 = 1;

var doSomeThing = function(y) {
    //注意 在函式裡沒有x2 因此向上一層找
    return x2 + y;
};

console.log( doSomeThing(50) );
console.log( x2 );  


console.log( "----------變數汙染------------" );

var x3 = 1;

var doSomeThing = function(y) {
    x3 = 20 //注意 在函式裡沒有x3 因此向上一層找
    return x3 + y;
};

console.log( doSomeThing(50) );
console.log( x3 );  

console.log('-------Variables Hoisting---------------')
//var 有個奇怪的特命，可以先使用，在宣告，javascript會在scope裡尋找，把"宣告的語法"拉到這個scope的最上面
var x4 = 1;

var doSomeThing = function(y) {

  console.log(x4);   // 會出現什麼？
  var x4 = 100;
  return x4 + y;
   /*
    var x4;
    console.log(x); //undefined
    x=100;
   */
};

console.log( doSomeThing(50) );   // ?
console.log( x4 );  
/**其實在 JavaScript 這門語言中，沒有所謂「全域變數」這種東西。
更準確地說，我們所說的「全域變數」其實指的是「全域物件」(或者叫「頂層物件」) 的屬性 
瀏覽器最上層 全域物件 window
*/
var a=10;
console.log( window.a );    // 請貼在瀏覽器console
/**
你會看到剛剛指定給 a 的 10 這個數字。

那麼就可以來下個結論：
變數有效範圍 (scope) 的最小切分單位是 function (ES6 的 let 與 const 例外)
即使是寫在函式內，沒有 var 的變數會變成「全域變數」
全域變數指的是全域物件 (頂層物件) 的「屬性」 

以上部分內容摘錄自 https://ithelp.ithome.com.tw/articles/10191549  重新認識 JavaScript
*/