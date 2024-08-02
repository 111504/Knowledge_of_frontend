/**，let 在每次迴圈迭代時都會創建一個新的作用域，
 * 這意味著每次 setTimeout 的回調函數都會捕獲當時迭代中的 i 值。
 * 因此，setTimeout 函數會在預期的時間內輸出 0, 1, 2, 3, 4。 */
// for (let i = 0; i < 5; i++) {
//     console.log(i);//短時間已經產生 i=1 i=2 i=3 i=4 i=5
//     setTimeout(function() {
//       console.log(i);
//     }, 1000);
//   }
//注意這是再延遲一秒後同步執行五個事件

/**當使用 var 宣告變量時，for 迴圈結束後 i 的值為 5。
 * 由於 var 沒有塊級作用域，所有的計時器回調函數在 for 
 * 迴圈結束後訪問到的都是這個共享的變量 i，而此時 i 的值已經是 5。
 * 這就是為什麼所有計時器回調函數都會輸出 5。 */
//   for (var i = 0; i < 5; i++) {
//     console.log(i);  //短時間已經產生 i=0 i=1 i=2 i=3 i=4
//     setTimeout(function() {
//       console.log(i);//產生 i=5 i=5 i=5 i=5 i=5
//     }, 1000);
//   }

//使用 IIFE（立即調用的函數表達式）
  for (var i = 0; i < 5; i++) {
    (function(i) {
        console.log(i); // 0, 1, 2, 3, 4
        setTimeout(function() {
            console.log(i); // 0, 1, 2, 3, 4
        }, i * 1000);
    })(i);
}
