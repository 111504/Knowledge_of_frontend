//請寫一個簡單的函數檢測輸入的字串是否為回文(palindrome)
function palindrome(str){
   str=str.toLowerCase();
   for (let i = 0; i < Math.floor(filteredStr.length / 2); i++) {
    if (filteredStr[i] !== filteredStr[filteredStr.length - i -1]) {
      return false
    }
  }
}
