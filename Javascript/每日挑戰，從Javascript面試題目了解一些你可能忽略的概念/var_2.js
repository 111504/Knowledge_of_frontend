(function(){
    var a = b = 3
    /**
     * 等同於b=3
     * var a=b
     * 代表b 作用域是window
     * 而a作用域是function
     */
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));


console.log("結合順序是 \n b = 3 \n var a = b")

/**
 * 總結
永遠都要使用關鍵字宣告變數，以免造成預期外的結果，現在的框架基本上都會幫你做把關
一次賦值多個變數的寫法並不是var a = b = c,而是需要寫var a = 3, b = 3
賦值運算子為右相依性，從右判斷到左
 */


