// 資料來源 https://ithelp.ithome.com.tw/m/articles/10265293 每日挑戰，從Javascript面試題目了解一些你可能忽略的概念
//1.請解釋var const & let的差別
// let 作用範圍是塊級作用域 function
//var 

//整理格式版面的函式
function format(){
    console.log("")
    console.log("-------------------------------")
}

//let 函數內部引用外部
console.log("let 函數內部引用外部")
let a=10
function test(){
    a=15;
    console.log(a)
}
test()
console.log(a)
format()
console.log("let 函數內部 外部不同")
let a2=10
function test2(){
    let a2=15;
    console.log(a2)
}
test2()
console.log(a2)
format()
console.log("var 變數可以先使用，後命名")
console.log(usef)
var usef;

format()
console.log("var 變數命名重複")
var author ='Danner'
var author ='Wang'
console.log("")
console.log(author)
console.log("let 變數命名重複 編譯錯誤\n let author2 = 'Danny'\n let author2 = 'Wang' ")
// let author2 = 'Danny'
// let author2 = 'Wang'

console.log("知識點:在同一個作用域(scope)中，var可以重複宣告相同變數，let & const則不能")
console.log("scope 變數的生存範圍，在目前作用域找不到，便會向外層尋找")
console.log("var宣告的變數為functional scoped，而let & const 宣告的變數為block scoped")

function demo() {
    for (var i = 1; i < 5; i++) {
      var host3 = 'Danny'
      let author3 = 'Wang'
    }
    console.log(host3)
   // console.log(author3)
  }
  
  demo()
  console.log("author3 報錯 Uncaught ReferenceError: author3 is not defined")
  format()
  console.log("總結")
  console.log("1.var能重複宣告相同名稱的變數，const & let則不行\n")
  console.log("2.let & const & var有不同的作用域，前兩者為block scoped,後者為functional scoped.\n")
  console.log("3.const 宣告的變數永遠無法被重新賦值，但仍可以被改變(陣列、物件等的操作)\n")