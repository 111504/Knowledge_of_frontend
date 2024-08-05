console.log("主題 hoist 在函數/變數 宣告前就先執行該函數/變數")

add(1,3)

function add(a,b){
    console.log(a+b)
}
/**在還沒有運行到該行函數宣告時，我們就已經可以正確使用add函數了! */


