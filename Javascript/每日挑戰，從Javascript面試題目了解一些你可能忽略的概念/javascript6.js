//我們知道JS中有兩種宣告函數的方法，請問以下兩種方法有差別嗎?

console.log(add(3, 5));
var add = function (a, b) {
  return a + b;
};

/*
其實原因相當的單純，我們說過提升是將所有的宣告(declaration)放到記憶體位置的行為，
且只有宣告會被提升、賦值的行為並不會一併被提升，
所以情境一的程式碼你可以這樣理解。

var add
console.log(add(3,5))  add變數被提升，但它仍還沒被賦值為一個函數
add = function(a, b) {
  return a + b
}
*/
