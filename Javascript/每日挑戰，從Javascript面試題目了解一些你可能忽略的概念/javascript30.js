//請寫一個簡單的函數檢測輸入的字串是否為回文(palindrome)
function psilnfrome(str){
  str=str.toLowerCase();//讓字串變為小寫
  //頭尾比對
  for(let i=0;i<Math.floor(str.length/2);i++){
    if(str[i]!==str[str.length-i-1]){
      return false
    }
  }
}