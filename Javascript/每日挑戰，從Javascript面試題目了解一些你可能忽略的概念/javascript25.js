//請你寫一個function isInteger(x)，可以用來判斷x是否為整數
//請先確認需求
/**函數要做、要回傳什麼?
傳入的參數有限制嗎?(例如有沒有需要處理edge cases)
解法有什麼限制嗎?(例如時間複雜度、不能使用原生語法等) */

function checkInt( x){
     return parseInt(x) === x
}

let x = 12520.32

console.log(checkInt(x))