//console.log(mul(2)(3)(4)) // 24
//console.log(mul(4)(3)(4)) // 48
//請寫出 mul
function mul(x){
    return function(y){

        return function(z){
            return x*y*z
        }
    }
}
//關鍵點 為何內部 function 仍有 x 與 y 變數的值  內部函式取外部變數為閉包
//mul(x)(y)(z)這樣的玩意其實有個專有名詞currying
function mul2(a){
    return function(b){
        return a*b
    }
}

console.log(mul2(2)(3))