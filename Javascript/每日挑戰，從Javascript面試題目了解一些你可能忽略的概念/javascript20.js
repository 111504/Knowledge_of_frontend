//請你解釋JS中是如何處理同步、非同步情況的
//Event loophttps://www.youtube.com/watch?v=8aGhZQkoFbQ
//https://www.youtube.com/watch?v=eiC58R16hb8
//js在主執行緒(main thread) 把他放進一個名為web API的等待區塊
//讓非同步的程式碼在那裡執行後推到queue去等待主執行緒中的程式碼執行完畢
console.log(1)
setTimeout(()=> console.log(2), 1000) 
console.log(3)