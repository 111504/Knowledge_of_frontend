console.log("主題 hoist 在函數/變數 宣告前就先執行該函數/變數")

add(1,3)

function add(a,b){
    console.log(a+b)
}
/**在還沒有運行到該行函數宣告時，我們就已經可以正確使用add函數了! */


console.log(a)

var a = 3

//印出 undefined var 變數宣告一樣hoist


function demo() {
   // console.log(a2)
   // const a2 = 5  
    /**
    * 這表示a變數確實也經過提升而被放到記憶體位置，
    * 只是let/const在被提升的行為與var並不相同，
    * var宣告的變數被提升後，
    * 預設的行為就是給予undefined這個值作為初始化，
    * 相對的let/const並沒有這樣的初始化，
    * 且若是在被賦值前被嘗試存取則採用丟出一個錯誤作為預設的處理方式，
    * 這樣一個小小的區間(被賦值前被嘗試存取)就被稱為所謂的暫時性死區(Temporal Dead Zone)，
    */
}
