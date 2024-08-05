//closure   函數本身參照外部參數的行為就會製造出閉包  函數裡面有inner 函數 ，而且這函數回傳的是函數
//閉包與一般函數的差別在於，一般函數中的變數在執行後就會從stack memory中消失，但由於閉包會需要不斷的參照外在環境的參數，他需要把那個參照的變數存在更長久保存的heap memory中不斷地引用

function demo(){
    let name='Deny'
    return function(){
        console.log(`Hello, my name is ${name}`)
    }
}
const demoFunc = demo() //請注意 demoFunc是 function喔
demoFunc() // Hello, my name is Danny

//5 個 6

for(var i=1;i<=5;i++){
    setTimeout(()=>{
        console.log(i)
    },100)
}