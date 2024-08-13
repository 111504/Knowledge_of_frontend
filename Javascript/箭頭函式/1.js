let addONe=function(n){
    return n+1;
}

let addone_v2=(n)=>{
    return n+1;
}

const obj={
   count :10,
   doSomethingLater(){
    setTimeout(()=>{
      this.count++;//這裡注意箭頭函數的this指向最接近的父層的一般函數(doSomeThingLater)的this值 obj
      console.log(this.count); // 11 (obj 的 count 原本是 10，10++ 會是 11)
    },300)
   }
}
// obj.doSomethingLater();



const ant = [1, 2, 3];
const arr = () => ant[0];
arr(); // 1
console.log(arr())


function foo(n1,n2,n3) {
    const f = () => arguments[0] + n1;
    return f();
  }
  console.log(foo(2,3,4))



  
  (function () {
    // Local scope inside IIFE
    var localVariable = "local variable";
    console.log(localVariable); // local variable
  })();