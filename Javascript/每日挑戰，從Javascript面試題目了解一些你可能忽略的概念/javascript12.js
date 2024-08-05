//IIFE是Immediately Invoked Function Expression，也就是立即執行函數

// (
//     function(){
//         console.log('這是一個IIFE函數')
//     }
// )()

// IIFE 1: 使用箭头函数
(() => {
    console.log('這是一個IIFE函數 箭頭函數');
})();

// IIFE 2: 使用普通函數
(function demo() {
    console.log('你好，我是丹尼，我喜歡狗但我不是狗');
})();



